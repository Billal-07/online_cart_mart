const pool = require('../../config/database')

module.exports = {
    create_user: (body, callback) => {
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'

        pool.getConnection((err, connection) => {
            if (err) return callback(err)
            connection.query(
                query,
                [body.name, body.email, body.password],
                (err, result) => {
                    connection.release()
                    if (err) callback(err)
                    else callback(null, result)
                }
            )
        })
    },
    
    get_users : (body, callback) => {
        const query = 'SELECT * FROM users'

        pool.getConnection((err, connection) => {
            if(err) return callback(err)

            connection.query(
                query,
            )
        })
    }
}
