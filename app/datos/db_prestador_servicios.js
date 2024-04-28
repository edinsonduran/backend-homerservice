const db_prestador_servicio=module.exports;

const base_datos=require("../configuraciones/conexion");

db_prestador_servicio.login = (email, password) => {
    return new Promise((resolve, reject) => {
        base_datos.query("SELECT * FROM prestadordeservicio WHERE correo = ? AND contrasenia = ?", [email, password], (err, rows) => {
            if (err) {
                console.log("Error: ", err);
                reject(err);
            } else {
                console.log('rows', rows);
                resolve(rows[0]);
            }
        });
    });
};



db_prestador_servicio.registro=(prestador_servicio)=>{

    const{nombres,apellidos,identificacion,direccion,telefono,tipo_servicio,correo,contrasenia}=prestador_servicio;
return new Promise((resolve,reject)=>{
    base_datos.query("INSERT INTO prestadordeservicio(nombres,apellidos,identificacion,telefono,tipo_servicio,direccion,correo,contrasenia) VALUES (?,?,?,?,?,?,?,?)",[nombres,apellidos,identificacion,telefono,tipo_servicio,direccion,correo,contrasenia],(err,rows)=>{
        if (err) {
            console.log("Error: ", err);
            reject(err);
        } else {
            resolve(rows);
        }
    })
})

};
