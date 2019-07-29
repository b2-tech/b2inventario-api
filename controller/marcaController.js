const models = require('../models');

module.exports = {

  async index(req, res) {
    const marca = await models.Marca.findAll();
    res.json(marca);
  }, //Listar todos

  async post(req, res) {
    const marca = await models.Marca.create(req.body);
    res.json(marca);
  }, // Criar

  async get(req, res) {
    const marca = await models.Marca.findByPk(req.params.id);
    res.json(marca);
  }, //Buscar

  async put(req, res) {
    const marca = await models.Marca.findAll();
    res.json(marca);
  }, //Editar

  async delete(req, res) {
    const marca = await models.Marca.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(marca);
  }, //Deletar

};
