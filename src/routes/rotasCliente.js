const express = require("express");
const router = express.Router();
const clientesService = require('../services/clientesService');

router.get('/clientes', async function(req, res) {
    const clientes = await clientesService.listaClientes();
    res.json(clientes);
});

router.get('/cliente/:id', async function(req, res) {
    const clientes = await clientesService.listaClientesPorId(req.params.id);
    res.json(clientes);
});

router.post('/cliente', async function(req, res) {
    const cliente = req.body;
    const novoCliente = await clientesService.salvarCliente(cliente);
    res.status(201).json(novoCliente);
});

router.put('/cliente/:id', async function(req, res) {
    const cliente = req.body;
    await clientesService.atualizaCliente(req.params.id, cliente);
    res.end();
});

router.delete('/delete/:id', async function(req, res) {

});


module.exports = router;
