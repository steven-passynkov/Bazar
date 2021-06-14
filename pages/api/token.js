var axios = require("axios").default;

export default async (req, res, next) => {
  var options = {
    method: "POST",
    url: "https://dev-y75e739g.us.auth0.com/oauth/token",
    headers: { "content-type": "application/json" },
    body: '{"client_id":"k5pSurhO0St2eOQbr4gu7zsDhL2JLruX","client_secret":"uc5rjYTZraWrxxvWkH_lPDlvLaRflxxNVB8BKdRRR0rlEkz6r8uQAv3xIsERe99m","audience":"https://dev-y75e739g.us.auth0.com/api/v2/","grant_type":"client_credentials"}',
  };

  try {
    const data = await axios.request(options);
    res.json(data.data);
  } catch (e) {
    console.error(e);
    res.status(500).end(e.message);
  }
};
