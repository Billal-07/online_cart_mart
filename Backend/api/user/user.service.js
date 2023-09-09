const { query } = require('express')
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

    get_user : (callback) => {
        const query = `SELECT * FROM users`

        pool.getConnection((err, connection) => {
            if(err) callback(err)

            connection.query(
                query, null,
                (err, result) => {
                    connection.release()
                    if(err) callback(err)
                    else callback(null, result)
                }    
            )
        })
    },
    user_by_Id: (id, callback) => {
        console.log(id)
        const query = `SELECT * FROM users where id = ?`

        pool.getConnection((err, connection) => {
            if(err) return callback(err)

            connection.query(query, [id], (err, result)=>{
                connection.release()
                if(err) callback(err)
                else callback(null, result)
            })
        })
    },
    
    userLogin : (body, callback) => {
        const query = `SELECT * FROM users where name = ? && password = ?`

        pool.getConnection((err, connection) => {
            if(err) callback(err)

            connection.query(query, [body.name, body.password], (err, result)=>{
                connection.release()
                if(err) callback(err) 
                else callback(null, result)
            })
        }) 
    }
}
