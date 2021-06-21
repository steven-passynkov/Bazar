var axios = require("axios").default;

/* GET users listing. */

export default async(req, res, next) => {
  var options = {
    method: "GET",
    url: "https://dev-y75e739g.us.auth0.com/api/v2/users",
    params: { q: `nickname:"${req.query.name}"`, search_engine: "v3" },
    headers: { authorization: `Bearer ${req.query.token}` },
  };

  try {
    const data = await axios.request(options);
    res.json(data.data);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e);
  }
};
