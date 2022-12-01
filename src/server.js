const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger-config.json');
const cors = require('cors');


const app = express();
app.use(express.json());


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", 
    'Origin, X-Requested-With,  Content-Type, Accept, Authorization');
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        app.use(cors());
     next();
    })



app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

app.use('/', require('./routes/rotasCliente'));

app.use('/', require('./routes/rotasProduto'));

app.use('/', require('./routes/rotasPedido'));

app.listen(3000, () => console.log("Servidor rodando: http://localhost:3000/"))



module.exports = app;
