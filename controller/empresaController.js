const models = require('../models');

module.exports = {

  async index(req, res) {
    const Empresa = await models.Empresa.findAll();
    res.json(Empresa);
  }, //Listar todos

  async post(req, res) {
    const Empresa = await models.Empresa.create(req.body);
    res.json(Empresa);
  }, // Criar

  async get(req, res) {
    const Empresa = await models.Empresa.findByPk(req.params.id);
    res.json(Empresa);
  }, //Buscar

  async put(req, res) {
    const Empresa = await models.Empresa.findAll();
    res.json(Empresa);
  }, //Editar

  async delete(req, res) {
    const Empresa = await models.Empresa.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(Empresa);
  }, //Deletar

};
