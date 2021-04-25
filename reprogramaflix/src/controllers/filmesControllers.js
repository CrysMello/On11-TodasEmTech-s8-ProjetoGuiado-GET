const { json } = require("body-parser");
const filmes = require("../models/filmes.json");

const getAll = (request, response) => {
  response.status(200).send(filmes);
};

const getById = (request, response) => {
    const idRequerido = request.params.idRequerido
    const idFiltrado = filmes.find(filme => filme.id == idRequerido);
    if (idFiltrado == undefined || idRequerido == " "){
        response.status(404).json([{
            "mensagem":"id não existente"
        }])
    } else {
        response.stats(200).json(idFiltrado);  
    }
    
};





const getByTitle = (request, response) => {
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find( filme => filme.Title.toLowerCase().includes(titulo))

    response.status(200).send(filmeFiltrado)
    
    console.log(titulo)
    console.log(filmeFiltrado)

    if (titulo == "" || filmeFiltrado == undefined) {
        response.status(400).json([{
            "mensagem": "por favor, digite um titulo valido"
        }])
    } else {
        response.status(200).send(filmeFiltrado)
    }
};

module.exports = {
  getAll,
  getById,
  getByTitle,
};
