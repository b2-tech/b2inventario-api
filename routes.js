const express = require("express");
const routes = express.Router();

const userController = require("./controller/userController");
const empresaController = require("./controller/empresaController");
const localController = require("./controller/localController");
const tipoController = require("./controller/tipoController");
const marcaController = require("./controller/marcaController");
const modeloController = require("./controller/modeloController");
const inventarioController = require("./controller/inventarioController");
const authController = require("./controller/authControlle");
const controleController = require("./controller/controleController");

const jwt = require('jsonwebtoken');
const passport = require('passport');
// const passportSetup = require("./config/auth");

function isAuth(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

routes.post("/login", authController.login);
routes.get("/logoff", isAuth, authController.logout);

routes.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/deuruim',
    failureFlash: true
  })
);

routes.get("/usuarios", userController.index);
routes.get("/usuarios/:id", userController.get);
routes.post("/usuarios", userController.post);
routes.put("/usuarios", userController.put);
routes.delete("/usuarios/:id", userController.delete);

routes.get("/locais", localController.index);
routes.get("/locais/:id", localController.get);
routes.post("/locais", localController.post);
routes.put("/locais/:id", localController.put);
routes.delete("/locais/:id", localController.delete);

routes.get("/controles", controleController.index);
routes.get("/controles/:id", controleController.get);
routes.post("/controles", controleController.post);
routes.put("/controles/:id", controleController.put);
routes.delete("/controles/:id", controleController.delete);

routes.get("/marcas", marcaController.index);
routes.get("/marcas/:id", marcaController.get);
routes.post("/marcas", marcaController.post);
routes.put("/marcas/:id", marcaController.put);
routes.delete("/marcas/:id", marcaController.delete);

routes.get("/modelos", modeloController.index);
routes.get("/modelos/:id", modeloController.get);
routes.post("/modelos", modeloController.post);
routes.put("/modelos/:id", modeloController.put);
routes.delete("/modelos/:id", modeloController.delete);

routes.get("/tipos", tipoController.index);
routes.get("/tipos/:id", tipoController.get);
routes.post("/tipos", tipoController.post);
routes.put("/tipos/:id", tipoController.put);
routes.delete("/tipos/:id", tipoController.delete);

routes.get("/inventarios", inventarioController.index);
routes.get("/inventarios/:id", inventarioController.get);
routes.post("/inventarios", inventarioController.post);
routes.put("/inventarios/:id", inventarioController.put);
routes.delete("/inventarios/:id", inventarioController.delete);

routes.get("/empresas", empresaController.index);
routes.get("/empresas/:id", empresaController.get);
routes.post("/empresas", empresaController.post);
routes.put("/empresas/:id", empresaController.put);
routes.delete("/empresas/:id", empresaController.delete);

module.exports = routes;
