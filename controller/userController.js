const models = require('../models');

module.exports = {

  async index(req, res) {
    const usuario = await models.Usuario.findAll();
    res.json(usuario);
  }, //Listar todos

  async post(req, res) {
    const usuario = await models.Usuario.create(req.body);
    res.json(usuario);
  }, // Criar

  async get(req, res) {
    const usuario = await models.Usuario.findByPk(req.params.id);
    res.json(usuario);
  }, //Buscar

  async put(req, res) {
    const usuario = await models.Usuario.findAll();
    res.json(usuario);
  }, //Editar

  async delete(req, res) {
    const usuario = await models.Usuario.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(usuario);
  }, //Deletar

};
