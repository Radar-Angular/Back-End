const express = require("express");

const app = express();
app.use(express.json());

app.use('/', require('./routes/rotasCliente'));

app.listen(3000, () => console.log("Servidor rodando: http://localhost:3000/"))
