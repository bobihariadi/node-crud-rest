
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const basicAuth = require('./_helpers/basic-auth-rest');

app.use(bodyparser.json());
app.use(cors());

app.use(basicAuth); //use basic auth

// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'db_restci',
//     multipleStatements: true
// });

// mysqlConnection.connect((err) => {
//     if (!err)
//         console.log('DB connection succeded');
//     else
//         console.log('DB failed \n Error : ' + JSON.stringify(err, undefined, 2));
// });

//get all people
const person = [
    {
        "id"        : "1",
        "name"      : "Bobi",
        "address"   : "Jakarta"
    },
    {
        "id"        : "2",
        "name"      : "Dian",
        "address"   : "Padang"
    },
    {
        "id"        : "3",
        "name"      : "Daffa",
        "address"   : "Pariaman"
    },
    {
        "id"        : "4",
        "name"      : "Rafif",
        "address"   : "Lubuk Alung"
    }
]

app.get('/people', (req, res) => {
    res.send(person);
});

app.get('/people/:id', (req, res) => {
    const user = person.find(u => u.id === req.params.id);
    res.send(user);
});



// get all news
app.get('/person', (req, res) => {
    mysqlConnection.query('SELECT * FROM tb_person', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});

// get single news
app.get('/person/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM tb_person WHERE ID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});

// delete news
app.delete('/person/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM tb_person WHERE ID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Delete successfully');
        else
            console.log(err);
    });
});

// insert news
app.post('/person', (req, res) => {
    let emp = req.body;

    var sql = "INSERT INTO tb_person (name, address, phone) VALUES (?,?,?)";
    mysqlConnection.query(sql, [emp.name, emp.address, emp.phone], (err, rows, fields) => {
        if (!err) {
            res.send('New ID : ' + rows.insertId);
        }
        else {
            console.log(err);
        }
    });
});


app.listen(3000, () => console.log('Express running on port 3000'));