require('dotenv').config();
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const rutas = require("./app/rutas")
const port = process.env.PORT || 3000;

class Servidor {
  PUERTO = port;

  constructor() {
    this.app = express();
    this.configuracion()
    this.rutas()
    this.inicio()
  }
  configuracion() {


    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use((req, res, next) => {
      req.header("Cache-Control", "no-cache");
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
      next();
    });
  }

  rutas() {
    this.app.get("/", (_, res) => {
      res.send('Hola mundo!');
    });
    this.app.use(rutas);
    this.app.use(cors());
  }
  inicio() {
    this.app.listen(this.PUERTO, "0.0.0.0", () => {
      console.log("Encendido en puerto: " + this.PUERTO

      );
    })
  }
}
const servidor = new Servidor();
module.exports = servidor.app;
