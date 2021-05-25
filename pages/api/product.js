import data from "../../api.json"

export default (req, res) => {
  

  console.log('product controller!!!')
     const found =  data.find(el => el.id == req.query.id)
  
    // Artificial delay for showing loader in client
    setTimeout(() => {
      // Send response: { count, data }
      res.status(200).json({
        data: found,
      });
    }, 1000);
  };