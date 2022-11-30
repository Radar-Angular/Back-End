const { v4: uuidv4 } = require('uuid');

const pedidosData = require('../data/pedidosData');

exports.listaPedidos = function() {
    return pedidosData.listaPedidos();
};

exports.listaPedidoPorId = async function(id) {
    const pedido = await pedidosData.listaPedidoPorId(id);
    if(!pedido)  throw new Error('Pedido não encontrado');
    return pedido
};

exports.listaPedidosPorNome = async function(nome) {
    const pedido = await pedidosData.listaPedidosPorNome(nome);
    if(pedido.length == 0)  throw new Error('Pedido não encontrado');
    return pedido
};

exports.salvarPedido = function(pedido) {
    pedido.id = uuidv4()
    return pedidosData.salvarPedido(pedido);
};

exports.atualizaPedido = async function(id, pedido) {
    await exports.listaPedidoPorId(id);

    const pedidos = exports.listaPedidos();
    const pedidoIndex = pedidos.findIndex(pedidoExistente => pedidoExistente.id === id);
    if (pedidoIndex < 0) throw new Error('Pedido não encontrado');
    const pedidoAtualizado = { ...pedidos[pedidoIndex], ...pedido};
    pedidos[pedidoIndex] = pedidoAtualizado;
    return pedidosData.atualizaPedido(id, pedidos);
}

exports.excluiPedido = async function(id) {
    await exports.listaPedidoPorId(id);
    return pedidosData.excluiPedido(id);
};
