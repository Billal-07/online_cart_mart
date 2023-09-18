const pool = require('../../config/database')

module.exports = {
    add_product: (body, callback) => {
        const query = 'INSERT INTO products(product_name, product_image, product_desc, product_price, quantity) VALUES (?, ?, ?, ?, ?)'

        pool.getConnection((err, connection) => {
            if(err) callback(err)

            connection.query(
                query,
                [body.product_name, body.product_image, body.product_desc, body.product_price, body.quantity],
                (err, result) => {
                    if(err) callback(err)
                    else callback(null, result)
                }
            )
        })
    }
}