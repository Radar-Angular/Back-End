const fs = require('fs');

function lista() {
    try {
        const dataProdutosJson =  fs.readFileSync('database/produtos.json', 'utf8');
        return JSON.parse(dataProdutosJson)
    } catch (err) {
        console.error(err);
    }
}

exports.listaProdutos = function() {
    return lista();
}

exports.listaProdutoPorId = function(id) {
    let produtos = []
    try {
        const dataProdutosJson = fs.readFileSync('database/produtos.json', 'utf8');
        produtos = JSON.parse(dataProdutosJson);
        return produtos.find(produto => produto.id == id);
    } catch (err) {
        console.error(err);
    }
}

exports.listaProdutoPorNome = function(nome) {
    const produtos = lista();
    const produto = produtos.filter(produto => produto.nome == nome); 
    return produto;
}

exports.salvarProduto = function(cliente) {
    const produtos = lista()
    try {
        produtos.push(cliente)
        fs.writeFileSync('database/produtos.json', JSON.stringify(produtos), {encoding: "utf8"});
        return cliente
    } catch (err) {
        console.error(err);
    }
};

exports.excluiProduto = function(id) {
    const produtos = lista();
    const produtoIndex = produtos.findIndex(produto => produto.id === id);
    if (produtoIndex >= 0) {
        produtos.splice(produtoIndex, 1);
        fs.writeFile('database/produtos.json', JSON.stringify(produtos), (err) => {
            if (err) throw err;
        })
        return produtos;
    }
}

exports.atualizaProduto = function(id, produto) {
    const produtos = lista();
    fs.writeFile('database/produtos.json', JSON.stringify(produto), (err) => {
        if (err) throw err;
    })
    return produtos;
}
