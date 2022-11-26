const express = require("express");
const router = express.Router();
const clientesService = require('../services/clientesService');

router.get('/clientes', async function(req, res) {
    const clientes = await clientesService.listaClientes();
    res.json(clientes);
});

router.get('/cliente/:id', async function(req, res) {
    try {
        const clientes = await clientesService.listaClientePorId(req.params.id);
        res.json(clientes);
    } catch (e) {
        res.status(404).json({"mensagem": "Cliente não encontrado!"})
    }
});

router.post('/cliente', async function(req, res) {
    const cliente = req.body;
    try {
        const novoCliente = await clientesService.salvarCliente(cliente);
        res.status(201).json(novoCliente);
    } catch(e) {
        res.status(404).json({"mensagem": "Cliente não encontrado!"});
    }
});

router.put('/cliente/:id', async function(req, res) {
    const cliente = req.body;
    try {
        await clientesService.atualizaCliente(req.params.id, cliente);
        res.status(204).end();
    } catch(e) {
        res.status(404).json({"mensagem": "Cliente não encontrado!"})
    }
});

router.delete('/cliente/:id', async function(req, res) {
    try {
        await clientesService.excluiCliente(req.params.id);
        res.status(204).end();
    } catch(e) {
        res.status(404).json({"mensagem": "Cliente não encontrado!"});
    }
});

module.exports = router;
