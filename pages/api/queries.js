const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'bazar',
  password: 'bazar',
  port: 4321,
})

export const getProducts = (request, response) => {
  pool.query("SELECT * FROM product ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

export const getProductById = (id, response) => {
  console.log('response', response)
  pool.query(`SELECT * FROM product WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    
    console.log('result', results.rows )
    response.status(200).json({
      data: results.rows.find((el) => el.id == id),
    })
  })
}

export const createProduct = (request, response) => {
  const { name, email } = request.body

  pool.query("INSERT INTO product (myuser, title, price, description, info, payed) VALUES ('', '', '', '', '', '')",
                  [myuser, title, price, description, info, payed], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Product added with ID: ${result.insertId}`)
  })
}

export const updateProduct = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, price, description, info, payed, views } = request.body

  pool.query(
    "UPDATE product SET title = '', email =  WHERE id = $3",
    [title , price, description, info, payed, views,id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product modified with ID: ${id}`)
    }
  )
}

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query("DELETE FROM product WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Product deleted with ID: ${id}`)
  })
}
/*
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}*/