const express = require('express');
const router = express.Router();

const abrirFicha = require('../Src/Ficha/ficha.abrir');

router.get("/:id", async (req, res) => {
    const id_ficha = req.params.id;
    const response = await abrirFicha(id_ficha);

    if (response.status !== 200) {
        return res.status(response.status).json(response.response);

    }

    return res.status(response.status).json(response.response);

} )

module.exports = router;