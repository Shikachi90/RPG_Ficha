const Ficha = require('../db/db.ficha');
const gerarID = require('../gerarID');

async function criarFicha(dados) {
    const novo_ID = gerarID();
    try {

        try {
            const novaFicha = await Ficha.create({
            id_ficha: novo_ID,
            nomeJogador: dados.nomeJogador,
            nomePersonagem: dados.nomePersonagem,

            forca: dados.forca,
            agilidade: dados.agilidade,
            vigor: dados.vigor,
            intelecto: dados.intelecto,
            presenca: dados.presenca,
            vida: dados.vida,
            defesa: dados.defesa,
            humanidade: dados.humanidade,
            marca: dados.marca,
            marca_energia: dados.marca_energia,

            descricao: dados.descricao,
            aparencia: dados.aparencia,
            historia: dados.historia,
            objetivo: dados.objetivo,
            trabalho: dados.trabalho,

            tracosPositivos: dados.tracosPositivos,
            tracosNegativos: dados.tracosNegativos,
            especialidades: dados.especialidades,
            ataques: dados.ataques,
            niveisArmas: dados.niveisArmas,
            inventario: dados.inventario
        })

            console.log(`Personagem ${dados.nomePersonagem} de ${dados.nomeJogador} criado com sucesso!`);

        } catch(err) {
            console.error(`Erro ao criar ficha: ${err}`);
        }


    } catch (err) {
        console.error(`Erro ao criar ficha: ${err}`)
    }

    return { status: 200, response: {
            Id_ficha: novo_ID
        } };

}

module.exports = criarFicha;