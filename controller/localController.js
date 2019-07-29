const models = require('../models');

module.exports = {

  async index(req, res) {
    const local = await models.Local.findAll();
    res.json(local);
  }, //Listar todos

  async post(req, res) {
    const local = await models.Local.create(req.body);
    res.json(local);
  }, // Criar

  async get(req, res) {
    const local = await models.Local.findByPk(req.params.id);
    res.json(local);
  }, //Buscar

  async put(req, res) {
    const local = 'teste';
    res.json(local);
  }, //Editar

  async delete(req, res) {
    const local = await models.Local.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(local);
  }, //Deletar


};
