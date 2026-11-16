const jwt = require("jsonwebtoken");
const env = require("../config/env");

function signToken(user) {
  return jwt.sign({ sub: String(user.id) }, env.JWT_SECRET, {
    expiresIn: "24h",
    issuer: "konftrack",
  });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, env.JWT_SECRET, { issuer: "konftrack" });
  } catch {
    return null;
  }
}

module.exports = { signToken, verifyToken };
