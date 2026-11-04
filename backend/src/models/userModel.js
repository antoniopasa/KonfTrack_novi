const bcrypt = require("bcrypt");
const prisma = require("../config/prisma");

// Pretvorba polja baze u postojeći oblik korisnika
function mapUser(user) {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    passwordHash: user.password_hash,
    firstName: user.first_name,
    lastName: user.last_name,
    institution: user.institution || "",
    orcidId: user.orcid,
    expertise: user.expertise
      ? user.expertise
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [],
  };
}

// Registracija novog korisnika
async function createUser({ email, password, firstName, lastName }) {
  const normalizedEmail = email.toLowerCase().trim();

  const existingUser = await findUserByEmail(normalizedEmail);

  if (existingUser) {
    throw new Error("EMAIL_EXISTS");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.users.create({
      data: {
        email: normalizedEmail,
        password_hash: passwordHash,
        first_name: firstName,
        last_name: lastName,
        institution: "",
      },
    });

    return mapUser(user);
  } catch (error) {
    if (error.code === "P2002") {
      throw new Error("EMAIL_EXISTS", { cause: error });
    }

    throw error;
  }
}

// Pronalaženje korisnika prema e-mailu
async function findUserByEmail(email) {
  const user = await prisma.users.findUnique({
    where: { email: email.toLowerCase().trim() },
  });

  return mapUser(user);
}

// Pronalaženje korisnika prema ID-u
async function findUserById(id) {
  const userId = Number(id);

  if (!Number.isInteger(userId)) {
    return null;
  }

  const user = await prisma.users.findUnique({ where: { id: userId } });

  return mapUser(user);
}

// Pronalaženje korisnika prema ORCID ID-u
async function findUserByOrcid(orcidId) {
  const user = await prisma.users.findUnique({ where: { orcid: orcidId } });

  return mapUser(user);
}

// Kreiranje ili pronalaženje ORCID korisnika
async function findOrCreateOrcidUser(orcidId, firstName, lastName) {
  let user = await findUserByOrcid(orcidId);

  if (!user) {
    const createdUser = await prisma.users.upsert({
      where: { orcid: orcidId },
      update: {},
      create: {
        first_name: firstName || "",
        last_name: lastName || "",
        institution: "",
        orcid: orcidId,
      },
    });

    user = mapUser(createdUser);
  }

  return user;
}

// Provjera lozinke
async function verifyPassword(user, password) {
  if (!user || !user.passwordHash) {
    return false;
  }

  return bcrypt.compare(password, user.passwordHash);
}

// Ažuriranje profila
async function updateUser(id, data) {
  const user = await findUserById(id);

  if (!user) {
    return null;
  }

  const updatedUser = await prisma.users.update({
    where: { id: user.id },
    data: {
      first_name: data.firstName,
      last_name: data.lastName,
      institution: data.institution,
      expertise: data.expertise.join(", "),
    },
  });

  return mapUser(updatedUser);
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  findOrCreateOrcidUser,
  verifyPassword,
  updateUser,
};
