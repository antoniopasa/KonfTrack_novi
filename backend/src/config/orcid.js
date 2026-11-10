const env = require("./env");

const baseUrl = env.ORCID_SANDBOX ? "https://sandbox.orcid.org" : "https://orcid.org";

module.exports = {
  baseUrl,
  clientId: env.ORCID_CLIENT_ID,
  clientSecret: env.ORCID_CLIENT_SECRET,
  callbackUrl: env.ORCID_CALLBACK_URL,
};
