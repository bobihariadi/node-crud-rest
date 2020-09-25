const express = require('express')
const router = express.Router()

// sample without database

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

//get all people
router.get('/people', (req, res) => {
    res.send(person);
});

//get specified id
router.get('/people/:id', (req, res) => {
    const user = person.find(u => u.id === req.params.id);
    res.send(user);
});

module.exports = router