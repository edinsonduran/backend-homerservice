const service_prestador_servicio=module.exports;
const db_prestador_servicio=require("../datos/db_prestador_servicios")

service_prestador_servicio.login=async(email,password)=>{
    const prestador_servicio=await db_prestador_servicio.login(email,password);
    if(prestador_servicio){

        return {error:false, data:prestador_servicio};
    }else{
        return{error:true}
    }}

    service_prestador_servicio.registro=async(prestador_servicio)=>{
        const resp = await db_prestador_servicio.registro(prestador_servicio);
        return {error:false, resp};
    }