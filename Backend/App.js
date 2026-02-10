const express = require('express');
const cors = require('cors');

const criarRouter = require('./Router/router.Criar');
const abrirFicha = require('./Router/router.Abrir');

// const criarFicha = require('./Src/Ficha/ficha.criar');
//const editarFicha = require('./Src/Ficha/ficha.editar');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/criar', criarRouter);
app.use('/ficha', abrirFicha);


// Opcional: Rota de teste para ver se o servidor está vivo
app.get("/", (req, res) => {
    res.send("Servidor RPG Rodando!");
});


app.listen(process.env.PORT, () => {
    console.log(`Penis ${process.env.PORT}`);
});
