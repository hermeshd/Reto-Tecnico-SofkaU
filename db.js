import mysql from 'mysql2';           //
const pool = mysql.createConnection({ //
    host: "localhost",                //Edit host
    user: "hermes",                   //Edit user
    password: "1234",                 //Edit password
    database: "SofkaU",               //Edit database
    acquireTimeout: 10000000             //
});  

export {pool};


