const { v4: uuidv4 } = require('uuid');

const clientesData = require('../data/clientesData');
// const Cliente  = require('../model/Cliente');

exports.listaClientes = function() {
    return clientesData.listaClientes();
};

exports.listaClientePorId = async function(id) {
    const cliente = await clientesData.listaClientePorId(id);
    if(!cliente)  throw new Error('Cliente não encontrado');
    return cliente
};

exports.salvarCliente = function(cliente) {
    cliente.id = uuidv4()
    return clientesData.salvarCliente(cliente);
};

exports.atualizaCliente = async function(id, cliente) {
    await exports.listaClientePorId(id);

    const clientes = exports.listaClientes();
    const clienteIndex = clientes.findIndex(clienteExistente => clienteExistente.id === id);
    if (clienteIndex < 0) throw new Error('Cliente não encontrado');
    const clienteAtualizado = { ...clientes[clienteIndex], ...cliente};
    clientes[clienteIndex] = clienteAtualizado;
    return clientesData.atualizaCliente(id, clientes);
}

exports.excluiCliente = async function(id) {
    await exports.listaClientePorId(id);
    return clientesData.excluiCliente(id);
};
