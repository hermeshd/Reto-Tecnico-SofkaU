import mysql from 'mysql2';           //
const pool = mysql.createConnection({ //
    host: "localhost",                //Editar host
    user: "hermes",                   //Editar usuario
    password: "1234",                 //Editar contraseña
    database: "SofkaU"                //Editar nombre base de datos
});  

export {pool};