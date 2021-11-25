let mysql = require ('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passwords: '',
    database: 'dbrestapi'
});

conn.connect((err)=> {
    if(err) throw err;
    console.log('MySql Connect');
});

module.exports = conn;