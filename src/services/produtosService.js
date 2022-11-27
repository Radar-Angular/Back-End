const { v4: uuidv4 } = require('uuid');

const produtosData = require('../data/produtosData');

exports.listaProdutos = function() {
    return produtosData.listaProdutos();
};

exports.listaProdutoPorId = async function(id) {
    const produto = await produtosData.listaProdutoPorId(id);
    if(!produto)  throw new Error('Produto não encontrado');
    return produto
};

exports.listaProdutoPorNome = async function(nome) {
    const produto = await produtosData.listaProdutoPorNome(nome);
    if(produto.length == 0)  throw new Error('Produto não encontrado');
    return produto
};

exports.salvarProduto = function(produto) {
    produto.id = uuidv4();
    return produtosData.salvarProduto(produto);
};

exports.atualizaProduto = async function(id, produto) {

    await exports.listaProdutoPorId(id);

    const produtos = exports.listaProdutos();
    const produtoIndex = produtos.findIndex(produtoExistente => produtoExistente.id === id);
    if (produtoIndex < 0) throw new Error('Produto não encontrado');
    const produtoAtualizado = { ...produtos[produtoIndex], ...produto};
    produtos[produtoIndex] = produtoAtualizado;
    return produtosData.atualizaProduto(id, produtos)
}

exports.excluiProduto = async function(id) {
    await exports.listaProdutoPorId(id);
    return produtosData.excluiProduto(id);
};
