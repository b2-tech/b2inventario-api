const models = require('../models');

module.exports = {

  async index(req, res) {
    const modelo = await models.Modelo.findAll();
    res.json(modelo);
  }, //Listar todos

  async post(req, res) {
    const modelo = await models.Modelo.create(req.body);
    res.json(modelo);
  }, // Criar

  async get(req, res) {
    const modelo = await models.Modelo.findByPk(req.params.id);
    res.json(modelo);
  }, //Buscar

  async put(req, res) {
    const modelo = await models.Modelo.findAll();
    res.json(modelo);
  }, //Editar

  async delete(req, res) {
    const modelo = await models.Modelo.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(modelo);
  }, //Deletar

};
