// const routes = require("express").Router();
const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const UsuarioController = require("../controllers/UsuarioController")

const routes = Router();

// o GET /Usuario não vai precisar de autenticação
routes.post("/usuario", UsuarioController.criarUsuario);
routes.delete("/usuario/:id", verifyJWT, UsuarioController.deleteUsuario);
routes.get("/usuario/:id", verifyJWT, UsuarioController.getUsuario);
routes.put("/usuario/:id", verifyJWT, UsuarioController.updateUsuario);

module.exports = routes;