const mysql = require('mysql')
const conn = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'woyaoqifei6',
	database: 'shop'
})
module.exports = conn
