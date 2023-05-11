const {Router} = require("express");

const CadastroEventoController = require("../controllers/CadastroEventoController")

const routes = Router();

routes.get("/CadastroEvento/:CadastroEvento_id", CadastroEventoController.get);
routes.post("/CadastroEvento", CadastroEventoController.post);
routes.delete("/CadastroEvento/:CadastroEvento_id", CadastroEventoController.delete);

module.exports = routes;
