// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [
  { name: "Alice Doe", email: "alice@xyz.com", department: "Computer Science" },
  {
    name: "John Doe",
    email: "john@xyz.com",
    department: "Information Technology",
  },
  { name: "Alice Doe", email: "alice@xyz.com", department: "Computer Science" },
  {
    name: "John Doe",
    email: "john@xyz.com",
    department: "Information Technology",
  },
  { name: "Alice Doe", email: "alice@xyz.com", department: "Computer Science" },
  {
    name: "John Doe",
    email: "john@xyz.com",
    department: "Information Technology",
  },
  { name: "Alice Doe", email: "alice@xyz.com", department: "Computer Science" },
  {
    name: "John Doe",
    email: "john@xyz.com",
    department: "Information Technology",
  },
  { name: "Alice Doe", email: "alice@xyz.com", department: "Computer Science" },
  {
    name: "John Doe",
    email: "john@xyz.com",
    department: "Information Technology",
  },
  { name: "Alice Doe", email: "alice@xyz.com", department: "Computer Science" },
  {
    name: "John Doe",
    email: "john@xyz.com",
    department: "Information Technology",
  },
  { name: "Alice Doe", email: "alice@xyz.com", department: "Computer Science" },
  {
    name: "John Doe",
    email: "john@xyz.com",
    department: "Information Technology",
  },
  { name: "Alice Doe", email: "alice@xyz.com", department: "Computer Science" },
];

export default (req, res) => {

  let studentInternal = data;

  // Calculate start, Aka skip if you use it in db queries
  const start =
    parseInt(req.query.recordsPerPage) * (parseInt(req.query.pageNumber) - 1);

  // Calculate end, Aka limit if you use it in db queries
  const end = start + parseInt(req.query.recordsPerPage);

  // Match if searchTerm is received from client
  // Use your DB query here
  if (req.query.searchTerm) {
    studentInternal = data.filter((student) => {
      return (
        student.name.match(new RegExp(req.query.searchTerm, "i")) ||
        student.email.match(new RegExp(req.query.searchTerm, "i")) ||
        student.department.match(new RegExp(req.query.searchTerm, "i"))
      );
    });
  }

  // Artificial delay for showing loader in client
  setTimeout(() => {
    // Send response: { count, data }
    res.status(200).json({
      count: studentInternal.length,
      data: studentInternal.slice(start, end),
    });
  }, 1000);
}
