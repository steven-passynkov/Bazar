var axios = require("axios").default;

export default async (req, res) => {
  try {
    var optionsToken = {
      method: "POST",
      url: "https://dev-y75e739g.us.auth0.com/oauth/token",
      headers: { "content-type": "application/json" },
      data: {
        client_id: "k5pSurhO0St2eOQbr4gu7zsDhL2JLruX",
        client_secret:
          "uc5rjYTZraWrxxvWkH_lPDlvLaRflxxNVB8BKdRRR0rlEkz6r8uQAv3xIsERe99m",
        audience: "https://dev-y75e739g.us.auth0.com/api/v2/",
        grant_type: "client_credentials",
      },
    };
    const tokenRes = await axios.request(optionsToken);

    var options = {
      method: "GET",
      url: "https://dev-y75e739g.us.auth0.com/api/v2/users",
      params: { q: `nickname:"${req.query.name}"`, search_engine: "v3" },
      headers: { authorization: `Bearer ${tokenRes.data.access_token}` },
    };

    const data = await axios.request(options);
    const user = data.data[0];
    delete user.last_ip;
    delete user.logins_count;
    delete user.last_login;
    delete user.user_id;
    delete user.updated_at;
    delete user.identities;
    delete user.email_verified;
    res.json(user);
  } catch (e) {
    console.error(e);
    res.status(500).end(e.message);
  }
};
