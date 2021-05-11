import data from "../../api.json"

export default (req, res) => {
  let dataInternal = data;

  // Calculate start, Aka skip if you use it in db queries
  const start =
    parseInt(req.query.recordsPerPage) * (parseInt(req.query.pageNumber) - 1);

  // Calculate end, Aka limit if you use it in db queries
  const end = start + parseInt(req.query.recordsPerPage);

  // Match if searchTerm is received from client
  // Use your DB query here
  if (req.query.searchTerm) {
    dataInternal = data.filter((data) => {
      return (
        data.name.match(new RegExp(req.query.searchTerm, "i"))
      );
    });
  }

  // Artificial delay for showing loader in client
  setTimeout(() => {
    // Send response: { count, data }
    res.status(200).json({
      count: dataInternal.length,
      data: dataInternal.slice(start, end),
    });
  }, 1000);
};
