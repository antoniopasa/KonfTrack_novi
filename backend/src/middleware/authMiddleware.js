const { verifyToken } = require("../services/tokenService");

function requireLogin(req, res, next) {
  const header = req.headers.authorization || "";
  const bearer = header.startsWith("Bearer ") ? header.slice(7) : null;
  const token = bearer || req.session.token;

  const payload = token ? verifyToken(token) : null;

  if (!payload) {
    if (bearer || req.originalUrl.startsWith("/api")) {
      return res.status(401).json({ error: "Neautoriziran pristup." });
    }
    return res.redirect("/login");
  }

  req.userId = Number(payload.sub);
  next();
}

module.exports = requireLogin;
