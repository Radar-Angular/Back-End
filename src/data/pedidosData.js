const fs = require('fs');

function lista() {
    try {
        const dataPedidosJson =  fs.readFileSync('database/pedidos.json', 'utf8');
        return JSON.parse(dataPedidosJson);
    } catch (err) {
        console.error(err);
    }
}

exports.listaPedidos = function() {
    return lista();
}

exports.listaPedidoPorId = function(id) {
    let pedidos = []
    try {
        const dataPedidosJson = fs.readFileSync('database/pedidos.json', 'utf8');
        pedidos = JSON.parse(dataPedidosJson);
        return pedidos.find(pedido => pedido.id == id);
    } catch (err) {
        console.error(err);
    }
}

exports.listaPedidosPorNome = function(nome) {
    const pedidos = lista();
    const pedido = pedidos.filter(pedido => pedido.nome == nome); 
    return pedido;
}

exports.salvarPedido = function(pedido) {
    const pedidos = lista()
    try {
        pedidos.push(pedido)
        fs.writeFileSync('database/pedidos.json', JSON.stringify(pedidos), {encoding: "utf8"});
        return pedido
    } catch (err) {
        console.error(err);
    }
};

exports.excluiPedido = function(id) {
    const pedidos = lista();
    const pedidoIndex = pedidos.findIndex(pedido => pedido.id === id);
    if (pedidoIndex >= 0) {
        pedidos.splice(pedidoIndex, 1);
        fs.writeFile('database/pedidos.json', JSON.stringify(pedidos), (err) => {
            if (err) throw err;
        })
        return pedidos;
    }
}

exports.atualizaPedido = function(id, pedido) {
    console.log("Data");

    const pedidos = lista();
    fs.writeFile('database/pedidos.json', JSON.stringify(pedido), (err) => {
        if (err) throw err;
    })
    return pedidos;
}
