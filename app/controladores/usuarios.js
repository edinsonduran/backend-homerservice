const controlador_usuarios=module.exports
const service_usuarios=require("../servicios/usuarios")

controlador_usuarios.login=async(req,res)=>{
    const body=req.body;
    console.log('llega',body);
    return await service_usuarios.login(body.email,body.password).then(response=>{
        console.log('respuesta', response);
        if(response.error === false){

            res.status(200).json(response)
        }else{
            console.log('respuesta erronea', response);
            res.status(400).json(response)

        }
    }).catch(error=>{
        console.log("error",error);
        res.status(500).json(error);
    })
}

controlador_usuarios.registro=async(req,res)=>{
    const usuario=req.body;
    return await service_usuarios.registro(usuario).then(response=>{
        if(response.error == false){
            console.log('respuesta', response);

            res.status(200).json(response)
        }else{
            res.status(400).json(response)

        }
    }).catch(error=>{
        console.log("error",error);
        res.status(500).json(error);
    })
}