const controlador_prestador_servicio=module.exports
const service_prestador_servicio=require("../servicios/prestador_servicio")

controlador_prestador_servicio.login=async(req,res)=>{
    const body=req.body;
    return await service_prestador_servicio.login(body.email,body.password).then(response=>{
        if(response.error == false){

            res.status(200).json(response)
        }else{
            res.status(400).json(response)

        }
    }).catch(error=>{
        console.log("error",error);
        res.status(500).json(error);
    })
}


controlador_prestador_servicio.registro=async(req,res)=>{
    const prestador_servicio=req.body;
    return await service_prestador_servicio.registro(prestador_servicio).then(response=>{
        if(response.error == false){

            res.status(200).json(response)
        }else{
            res.status(400).json(response)

        }
    }).catch(error=>{
        console.log("error",error);
        res.status(500).json(error);
    })
}
