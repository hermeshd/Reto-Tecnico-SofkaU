//Import functions necessary for the program to work and connect to the database
import addData from "./addData/addData.js";
import createSQLData from "./databaseStuff/createSQLData.js";
import populateSQLTable from "./databaseStuff/populateSQLTable.js";
import searchData from "./searchData/searchData.js";
import lookUpAllSQLData from "./lookUpData/lookUpAllSQLData.js";
import promptSync from "prompt-sync";
const input = promptSync();
import mysql from 'mysql2';
const pool = mysql.createConnection({
    host: "localhost",
    user: "hermes",
    password: "1234",
    database: "SofkaU"
});
//Defining the objects
let spacecrafts = {
    shuttles: {
        0: {
            name: "value",
            country: "value",
            combustible: "value",
            startYear: "value",
            endYear: "value"
        },
    },
    manned: {
        0: {
            name: "value",
            country: "value",
            maxCrew: "value",
            startYear: "2012",
            endYear: "Actualidad"
        }
    },
    unmanned: {
        0: {
            name: "value",
            country: "value",
            objectStudy: "value",
            startYear: "value",
            endYear: "value"
        }
    }
};



//Welcome message
console.log(`
                                                            ----- CLASIFICACION DE LAS NAVES ESPACIALES -----

Este programa le permite conocer cuales son las diferentes clases de naves espaciales que existen hoy en dia, asi como sus caracteristicas especificas. Estas se dividen principalmente en:

- Transportadores: Son el 'motor' de cada tipo de nave. Son cohetes autopropulsados que tienen como funcion lanzar una carga util al espacio.
- Tripuladas: Son naves diseñadas para llevar personas al espacio y mantenerlas seguras durante todo su viaje.
- No-tripuladas: Estas naves estan conformadas mas que todo por satelites que tienen como objetivo estudiar tanto la tierra como otros planetas.

A lo largo de la historia, existieron muchas diferentes clases de naves espaciales, por lo que usted puede agregar informacion adicional a esta base de datos y asi permitir que otros puedan conocer aun mas acerca de las diferentes clases de naves espaciales

Este programa tambien le permite filtrar las diferentes naves que existen de acuerdo a un parametro en especifico.

Presione enter para continuar...
`);
input.hide("> ");


//Program starts. Ensure table gets reset every time the program launches
createSQLData(populateSQLTable, main);

// Program starts and asks for user input
export default function main(){
    
    console.log("\nQue accion desea realizar?: \n1. Agregar datos \n2. Buscar datos \n3. Ver datos actuales\n");
    const action = input("> ");

    if (action == 1) {                                                                                                      //Agregar datos
        addData();

    } else if (action == 2) {                                                                                               //Buscar datos
        
        console.log(`Seleccione una categoria para buscar en la base de datos:

        1. Tipo de nave (Transportador, Tripulada o No-Tripulada)
        2. Nombre de la nave
        3. Pais de fabricacion de la nave
        4. Tipo de combustible que utiliza la nave
        5. Año de fabricacion
        6. Año de finalizacion de uso
        7. Capacidad maxima de tripulantes
        8. Objeto de estudio
        `
        );
        
        let searchOption = input("> ");

        let value = input("Ingrese el valor a buscar: ");

        searchData(searchOption, value);
        
    } else if (action == 3) {                                                                                               //Ver todos los datos
        lookUpAllSQLData(); 

    } else if (action === null) {
        return;

    } else {
        console.log("Opcion invalida");
        console.log("\nPresiona ENTER para regresar...");
        input.hide("> ");
        main();
    };
};

export {pool};
export {input};
export {spacecrafts};