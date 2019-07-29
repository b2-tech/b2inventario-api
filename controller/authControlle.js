const models = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {

  async login(req, res) {
    const usuario = await models.Usuario.findOne({where:{ nome: req.body.email }});
    if (usuario) {
      if (usuario.password == req.body.password) {
        // const id = usuario.id;
        // var token = await jwt.sign({ id }, process.env.SECRET, {
        //   expiresIn: 300 // expires in 5min
        // });
        // res.status(200).json({ auth: true, token: token, usuario });
        res.status(200).json({ auth: true, usuario });
      } else {
        res.status(500).json({ auth: false, message: 'senha incorreta' });
      }
    } else {
      res.status(500).json({ auth: false, message: 'login nao encontrado' });
    }
  }, //Listar todos

  async logout (req, res) {
    res.status(200).send({ auth: false, token: null });
  }

};
