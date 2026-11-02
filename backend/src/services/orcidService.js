const orcidConfig = require("../config/orcid");

// Zamjena authorization code za access token
async function getAccessToken(code) {
  const response = await fetch(`${orcidConfig.baseUrl}/oauth/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: orcidConfig.clientId,
      client_secret: orcidConfig.clientSecret,
      grant_type: "authorization_code",
      code,
      redirect_uri: orcidConfig.callbackUrl,
    }),
  });

  if (!response.ok) {
    throw new Error("ORCID_TOKEN_ERROR");
  }

  return response.json();
}

module.exports = {
  getAccessToken,
};
