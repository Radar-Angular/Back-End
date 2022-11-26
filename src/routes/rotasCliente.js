const express = require("express");
const router = express.Router();

router.get('/clientes', async function(req, res) {
    res.send("Ola")
});

router.get('/cliente/:id', async function(req, res) {

});

router.post('/cliente', async function(req, res) {

});

router.put('/cliente/:id', async function(req, res) {

});

router.delete('/delete/:id', async function(req, res) {

});


module.exports = router;
