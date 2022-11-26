const fs = require('fs');

function lista() {
    let clientes = []
    try {
        const dataClientesJson = fs.readFileSync('database/clientes.json', 'utf8');
        clientes = JSON.parse(dataClientesJson)
    } catch (err) {
        console.error(err);
    }
    return clientes
}

exports.listaClientes = function() {
    lista();
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
    let clientes = lista();
    try {
        clientes.push(cliente)
        fs.writeFileSync('database/clientes.json', JSON.stringify(clientes), {encoding: "utf8"});
        return cliente
    } catch (err) {
        console.error(err);
    }
    
};

exports.excluiCliente = function(id) {
    clientes.forEach(cliente => {
        if(cliente.id == id) {
            clientes.splice(cliente, 1);
        }
    })
    return clientes
}
