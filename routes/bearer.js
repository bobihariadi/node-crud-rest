const express = require('express')
const router = express.Router()
const bearerAuth = require('../_helpers/bearer-auth');
const mysqlConnection = require('../conn');

// session data
router.get('/me', bearerAuth, (req, res) => {
    sessionData = req.session;
    res.send(sessionData);
});

// get all news
router.get('/person', bearerAuth, (req, res) => {
    mysqlConnection.query('SELECT * FROM tb_person', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});

// get single news
router.get('/person/:id', bearerAuth, (req, res) => {
    mysqlConnection.query('SELECT * FROM tb_person WHERE ID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});

// delete news
router.delete('/person/:id', bearerAuth, (req, res) => {
    mysqlConnection.query('DELETE FROM tb_person WHERE ID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Delete successfully');
        else
            console.log(err);
    });
});

// insert news
router.post('/person', bearerAuth, (req, res) => {
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

module.exports = router