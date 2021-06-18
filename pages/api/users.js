var axios = require("axios").default;
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function myApiRoute(req, res) {
  const { user } = getSession(req, res);
  res.json({ protected: 'My Secret', id: user.name });
});


/* GET users listing. */

/*export default async(req, res, next) => {



  var options = {
    method: "GET",
    url: "https://dev-y75e739g.us.auth0.com/api/v2/users",
    params: { q: `nickname:"${req.query.name}"`, search_engine: "v3" },
    headers: { authorization: `Bearer ${JSON.stringify(token)}` },
  };

  try {
    const data = await axios.request(options);
    res.json(data.data);
  } catch (e) {
    console.error(e);
    res.status(500).end(e.message);
  }
};*/
