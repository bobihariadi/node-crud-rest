const express = require('express')
const mysql = require('mysql')

// Connect DB MyQL
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_restci',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded');
    else
        console.log('DB failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


module.exports = mysqlConnection
 