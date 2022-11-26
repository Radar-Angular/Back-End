const fs = require('fs');

function lista() {
    try {
        const dataClientesJson =  fs.readFileSync('database/clientes.json', 'utf8');
        return JSON.parse(dataClientesJson)
    } catch (err) {
        console.error(err);
    }
}

function salvar(cliente) {
    const clientes = lista()
    try {
        clientes.push(cliente)
        fs.writeFileSync('database/clientes.json', JSON.stringify(clientes), {encoding: "utf8"});
        return cliente
    } catch (err) {
        console.error(err);
    }
}

exports.listaClientes = function() {
    return lista()
}

exports.listaClientesPorId = function(id) {
    let clientes = []
    try {
        const dataClientesJson = fs.readFileSync('database/clientes.json', 'utf8');
        clientes = JSON.parse(dataClientesJson);
        return clientes.find(cliente => cliente.id == id);
    } catch (err) {
        console.error(err);
    }
}

exports.salvarCliente = function(cliente) {
    return salvar(cliente);
};

exports.excluiCliente = function(id) {
    const clientes = lista();
    const clienteIndex = clientes.findIndex(cliente => cliente.id === id);
    if (clienteIndex >= 0) {
        clientes.splice(clienteIndex, 1);
        fs.writeFile('database/clientes.json', JSON.stringify(clientes), (err) => {
            if (err) throw err;
        })
        return clientes;
    }
}
