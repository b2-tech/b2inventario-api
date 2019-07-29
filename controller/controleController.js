const models = require('../models');

module.exports = {

  async index(req, res) {
    const controle = await models.Controle.findAll();
    res.json(controle);
  }, //Listar todos

  async post(req, res) {
    const controle = await models.Controle.create(req.body);
    res.json(controle);
  }, // Criar

  async get(req, res) {
    const controle = await models.Controle.findByPk(req.params.id);
    res.json(controle);
  }, //Buscar

  async put(req, res) {
    const controle = await models.Controle.findAll();
    res.json(controle);
  }, //Editar

  async delete(req, res) {
    const controle = await models.Controle.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(controle);
  }, //Deletar

};
