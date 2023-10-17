const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sys',
    password: 'shailesh'
});

module.exports = pool.promise();