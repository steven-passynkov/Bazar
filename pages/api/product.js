import { getProducts } from "./queries";
import { updateProduct } from "./queries";
import { createProduct } from "./queries";
import { getProductById } from "./queries";

export default (req, res) => {
  if (req.method === "PUT") {
    // update
    updateProduct(req, res);
  } else if (req.method === "POST") {
    // create
    createProduct(req, res);
  } else {
    console.log('id!!!!!', req.query.id);
    getProductById(
      req.query.id, res
    );
  }

  /*const found = data.find((el) => el.id == req.query.id);

  // Artificial delay for showing loader in client
  setTimeout(() => {
    // Send response: { count, data }
    res.status(200).json({
      data: found,
    });
  }, 1000);*/
};
