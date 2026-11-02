const conferences = [
  {
    id: 1,
    name: "Konferencija A",
  },
  {
    id: 2,
    name: "Konferencija B",
  },
];

// Veze između korisnika i konferencija
const memberships = [];

const allowedRoles = ["author", "reviewer", "organizer", "attendee"];

// Dodjeljivanje uloge korisniku na konferenciji
function addUserToConference(userId, conferenceId, role) {
  if (!allowedRoles.includes(role)) {
    throw new Error("INVALID_ROLE");
  }

  const conference = conferences.find((item) => item.id === Number(conferenceId));

  if (!conference) {
    throw new Error("CONFERENCE_NOT_FOUND");
  }

  const existing = memberships.find(
    (item) => item.userId === Number(userId) && item.conferenceId === Number(conferenceId),
  );

  if (existing) {
    existing.role = role;
    return existing;
  }

  const membership = {
    userId: Number(userId),
    conferenceId: Number(conferenceId),
    role,
  };

  memberships.push(membership);

  return membership;
}

// Dohvaćanje svih konferencija i uloga korisnika
function getUserConferences(userId) {
  return memberships
    .filter((item) => item.userId === Number(userId))
    .map((item) => {
      const conference = conferences.find((conference) => conference.id === item.conferenceId);

      return {
        conferenceName: conference.name,
        role: item.role,
      };
    });
}

module.exports = {
  conferences,
  memberships,
  addUserToConference,
  getUserConferences,
};
