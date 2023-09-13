const pool = require('../../config/database')

module.exports = {
    adSign_up: (body, callback) => {
        const query = 'INSERT INTO admin(name, email, password) VALUES (?, ?, ?)'

        pool.getConnection((err, connection) => {
            if (err) return callback(err)

            connection.query(
                query,
                [body.name, body.email, body.password],
                (err, result) => {
                    connection.release()
                    if (err) return callback(err)
                    else return callback(null, result)
                }
            )
        })
    },
    login_user: (body, callback) => {
        const query = 'SELECT * FROM admin WHERE email = ? && password = ?'

        pool.getConnection((err, connection) => {
            if (err) return callback(err)

            connection.query(
                query,
                [body.email, body.password],
                (err, result) => {
                    connection.release()
                    if (err) return callback(err)
                    else return callback(null, result)
                }
            )
        })
    }
}