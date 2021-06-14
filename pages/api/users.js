var axios = require("axios").default;


/* GET users listing. */

export default async(req, res, next) => {
  console.log('token', req.query.token);
  console.log('name', req.query.name);

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
    console.error(e);
    res.status(500).end(e.message);
    //this will eventually be handled by your error handling middleware
    //next(e);
  }
};
