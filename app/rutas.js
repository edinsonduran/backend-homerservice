const express =require("express")
const rutero=express.Router()
const controlador_usuarios=require("./controladores/usuarios")
const controlador_prestador_servicio=require("./controladores/prestador_servicio")



rutero.post("/usuario/login",controlador_usuarios.login)
rutero.post("/usuario/registrar",controlador_usuarios.registro)

rutero.post("/prestador_servicio/login",controlador_prestador_servicio.login)
rutero.post("/prestador_servicio/registrar",controlador_prestador_servicio.registro)


module.exports=rutero;