const { v4: uuidv4 } = require('uuid');

const clientesData = require('../data/clientesData');
// const Cliente  = require('../model/Cliente');

exports.listaClientes = function() {
    return clientesData.listaClientes();
};

exports.listaClientesPorId = function(id) {
    return clientesData.listaClientesPorId(id);
};

exports.salvarCliente = function(cliente) {
    cliente.id = uuidv4()
    return clientesData.salvarCliente(cliente);
};

exports.atualizaCliente = function(id, cliente) {
    return clientesData.atualizaCliente(id, cliente);
}

exports.excluiCliente = function(id) {
    return clientesData.excluiCliente(id);
};
