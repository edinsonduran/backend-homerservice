const db_usuarios=module.exports;
const base_datos=require("../configuraciones/conexion");

db_usuarios.login = (email, password) => {
    return new Promise((resolve, reject) => {
        base_datos.query("SELECT * FROM usuario WHERE correo = ? AND contrasenia = ?", [email, password], (err, rows) => {
            if (err) {
                console.log("Error: ", err);
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    });
};

db_usuarios.registro = (usuario) => {
    const{nombre,apellido,identificacion,celular,direccion,correo,contrasenia}=usuario;
    return new Promise((resolve, reject) => {
        base_datos.query("INSERT INTO usuario (nombre,apellido,identificacion,celular,direccion,correo,contrasenia) VALUES (?,?,?,?,?,?,?) ", [nombre,apellido,identificacion,celular,direccion,correo,contrasenia], (err, rows) => {
            if (err) {
                console.log("Error: ", err);
                reject(err);
            } else {
                console.log('rows', rows);
                resolve(rows);
            }
        });
    });
};
