var axios = require("axios").default;

export default async (req, res) => {
  var options = {
    method: "POST",
    url: "https://dev-y75e739g.us.auth0.com/oauth/token",
    headers: { "content-type": "application/json" },
    data: {
      client_id: `${req.query.client_id}`,
      client_secret:
      `${req.query.client_secret}`,
      audience: "https://dev-y75e739g.us.auth0.com/api/v2/",
      grant_type: "client_credentials",
    },
  };

  try {
    const data = await axios.request(options);
    res.json(data.data);
  } catch (e) {
    console.error(e);
    res.status(500).end(e.message);
  }
};
