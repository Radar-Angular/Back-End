const express = require("express");
const router = express.Router();
const produtosService = require('../services/produtosService');

router.get('/produtos', async function(req, res) {
    const produto = await produtosService.listaProdutos();
    res.json(produto);
});

router.get('/produtos/:id', async function(req, res) {
    try {
        const produto = await produtosService.listaProdutoPorId(req.params.id);
        res.json(produto);
    } catch (e) {
        res.status(404).json({"mensagem": "Produto não encontrado!"})
    }
});

router.get('/produtos/:nome', async function(req, res) {
    try {
        const produto = await produtosService.listaProdutoPorNome(req.params.nome);
        res.json(produto);
    } catch (e) {
        res.status(404).json({"mensagem": "Produto não encontrado!"})
    }
});

router.post('/produtos', async function(req, res) {
    const produto = req.body;
    try {
        const novoProduto = await produtosService.salvarProduto(produto)
        res.status(201).json(novoProduto);
    } catch(e) {
        res.status(404).json({"mensagem": "Produto não encontrado!"});
    }
});

router.put('/produtos/:id', async function(req, res) {
    const produto = req.body;
    try {
        await produtosService.atualizaProduto(req.params.id, produto);
        res.status(204).end();
    } catch(e) {
        res.status(404).json({"mensagem": "Produto não encontrado!"})
    }
});

router.delete('/produtos/:id', async function(req, res) {
    try {
        await produtosService.excluiProduto(req.params.id);
        res.status(204).end();
    } catch(e) {
        res.status(404).json({"mensagem": "Produto não encontrado!"});
    }
});

module.exports = router;
