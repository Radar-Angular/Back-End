const express = require("express");
const router = express.Router();
const pedidosService = require('../services/pedidosService');

router.get('/pedidos', async function(req, res) {
    const pedidos = await pedidosService.listaPedidos();
    res.json(pedidos);
});

router.get('/pedido/:id', async function(req, res) {
    try {
        const pedido = await pedidosService.listaPedidoPorId(req.params.id);
        res.json(pedido);
    } catch (e) {
        res.status(404).json({"mensagem": "Pedido não encontrado!"})
    }
});

router.get('/pedidos/:nome', async function(req, res) {
    try {
        const pedido = await pedidosService.listaPedidosPorNome(req.params.nome);
        res.json(pedido);
    } catch (e) {
        res.status(404).json({"mensagem": "Nenhum pedido não encontrado!"})
    }
});

router.post('/pedido', async function(req, res) {
    const pedido = req.body;
    try {
        const novoPedido = await pedidosService.salvarPedido(pedido);
        res.status(201).json(novoPedido);
    } catch(e) {
        res.status(404).json({"mensagem": "Pedido não encontrado!"});
    }
});

router.put('/pedido/:id', async function(req, res) {
    const pedido = req.body;
    try {
        await pedidosService.atualizaPedido(req.params.id, pedido);
        res.status(204).end();
    } catch(e) {
        res.status(404).json({"mensagem": "Pedido não encontrado!"})
    }
});

router.delete('/pedido/:id', async function(req, res) {
    try {
        await pedidosService.excluiPedido(req.params.id);
        res.status(204).end();
    } catch(e) {
        res.status(404).json({"mensagem": "Pedido não encontrado!"});
    }
});

module.exports = router;
