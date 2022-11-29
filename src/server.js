const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger-config.json');

const app = express();
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

app.use('/', require('./routes/rotasCliente'));

app.use('/', require('./routes/rotasProduto'));

app.listen(3000, () => console.log("Servidor rodando: http://localhost:3000/"))
