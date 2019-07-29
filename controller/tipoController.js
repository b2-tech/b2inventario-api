const models = require('../models');

module.exports = {

  async index(req, res) {
    const tipo = await models.Tipo.findAll();
    res.json(tipo);
  }, //Listar todos

  async post(req, res) {
    const tipo = await models.Tipo.create(req.body);
    res.json(tipo);
  }, // Criar

  async get(req, res) {
    const tipo = await models.Tipo.findByPk(req.params.id);
    res.json(tipo);
  }, //Buscar

  async put(req, res) {
    const tipo = await models.Tipo.findAll();
    res.json(tipo);
  }, //Editar

  async delete(req, res) {
    const tipo = await models.Tipo.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(tipo);
  }, //Deletar

};
