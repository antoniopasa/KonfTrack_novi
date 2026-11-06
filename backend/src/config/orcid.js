const isSandbox = process.env.ORCID_SANDBOX === "true";

const baseUrl = isSandbox ? "https://sandbox.orcid.org" : "https://orcid.org";

module.exports = {
  baseUrl,
  clientId: process.env.ORCID_CLIENT_ID,
  clientSecret: process.env.ORCID_CLIENT_SECRET,
  callbackUrl: process.env.ORCID_CALLBACK_URL,
};
