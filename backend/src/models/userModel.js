const bcrypt = require("bcrypt");

const users = [];
let nextId = 1;

// Registracija novog korisnika
async function createUser({ email, password, firstName, lastName }) {
  const normalizedEmail = email.toLowerCase().trim();

  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    throw new Error("EMAIL_EXISTS");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = {
    id: nextId++,
    email: normalizedEmail,
    passwordHash,
    firstName,
    lastName,
    institution: "",
    orcidId: null,
    expertise: [],
  };

  users.push(user);

  return user;
}

// Pronalaženje korisnika prema e-mailu
function findUserByEmail(email) {
  return users.find((user) => user.email === email.toLowerCase().trim());
}

// Pronalaženje korisnika prema ID-u
function findUserById(id) {
  return users.find((user) => user.id === Number(id));
}

// Pronalaženje korisnika prema ORCID ID-u
function findUserByOrcid(orcidId) {
  return users.find((user) => user.orcidId === orcidId);
}

// Kreiranje ili pronalaženje ORCID korisnika
function findOrCreateOrcidUser(orcidId, firstName, lastName) {
  let user = findUserByOrcid(orcidId);

  if (!user) {
    user = {
      id: nextId++,
      email: null,
      passwordHash: null,
      firstName: firstName || "",
      lastName: lastName || "",
      institution: "",
      orcidId,
      expertise: [],
    };

    users.push(user);
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
function updateUser(id, data) {
  const user = findUserById(id);

  if (!user) {
    return null;
  }

  user.firstName = data.firstName;
  user.lastName = data.lastName;
  user.institution = data.institution;
  user.expertise = data.expertise;

  return user;
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  findOrCreateOrcidUser,
  verifyPassword,
  updateUser,
};
