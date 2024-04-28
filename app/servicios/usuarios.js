const service_usuarios=module.exports;
const db_usuarios=require("../datos/db_usuarios")

service_usuarios.login=async(email,password)=>{
    const usuario=await db_usuarios.login(email,password);
    if(usuario){

        return {error:false, data:usuario};
    }else{
        return{error:true}
    }
}

service_usuarios.registro=async(usuario)=>{
    await db_usuarios.registro(usuario);
    return {error:false};
}