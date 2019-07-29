const models = require('../models');

module.exports = {

  async index(req, res) {
    const inventario = await models.Inventario.findAll();
    res.json(inventario);
  }, //Listar todos

  async post(req, res) {
    console.log(req.body);
    try {
      const inventario = await models.Inventario.create(req.body);
      res.json(inventario);
    } catch(e) {
      console.log(e);
    }
  }, // Criar

  async get(req, res) {
    const inventario = await models.Inventario.findByPk(req.params.id);
    res.json(inventario);
  }, //Buscar

  async put(req, res) {
    const inventario = await models.Inventario.findAll();
    res.json(inventario);
  }, //Editar

  async delete(req, res) {
    const inventario = await models.Inventario.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(inventario);
  }, //Deletar

};
