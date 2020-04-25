// Set up MySQL connection.
var mysql = require('mysql');
// var conneection = require('dotenv').config();
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db',
})
if(process.env.JAWSBD_URL){
    connection = mysql.createConnection(process.env.JAWSBD_URL);}else{
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'burgers_db'
})
//     }
// var mysql = require('mysql')

// var connection
// if (process.env.JAWSDB_URL) {
//     // Database is JawsDB on Heroku
//     // connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//     // Database is local
//     connection = mysql.createConnection(process.env.pw)
// }

// var mysql = require('mysql')
// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('connected as id ' + connection.threadId)
})

// Export connection for our ORM to use.
module.exports = connection
