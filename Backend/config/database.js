const mysql = require('mysql')

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "carmart",
    password: "",
    connectionlimit: 100000,
    connectionTimeout: 60000,
    aquireTimeout : 100,
    queueLimit : 10,
    waitForConnection: true
})

module.exports = pool