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

//Import functions necessary for the program to work and connect to the database
    const input = require('prompt-sync')();
    const mysql = require('mysql2');
    const pool = mysql.createConnection({
        host: "localhost",
        user: "hermes",
        password: "1234",
        database: "SofkaU"
    });

//Welcome message
    input(`
        ----- CLASIFICACION DE LAS NAVES ESPACIALES -----
        
        Este programa le permite conocer cuales son las diferentes clases de naves espaciales que existen hoy en dia, asi como sus caracteristicas especificas. Estas se dividen principalmente en:
        - Transportadores: Son el 'motor' de cada tipo de nave. Son cohetes autopropulsados que tienen como funcion lanzar una carga util al espacio.
        - Tripuladas: Son naves diseñadas para llevar personas al espacio y mantenerlas seguras durante todo su viaje.
        - No-tripuladas: Estas naves estan conformadas mas que todo por satelites que tienen como objetivo estudiar tanto la tierra como otros planetas.

        A lo largo de la historia, existieron muchas diferentes clases de naves espaciales, por lo que usted puede agregar informacion adicional a esta base de datos y asi permitir que otros puedan conocer aun mas acerca de las diferentes clases de naves espaciales

        Este programa tambien le permite filtrar las diferentes naves que existen de acuerdo a un parametro en especifico.

        Presione enter para continuar...
    `);

//Program starts. Ensure table gets reset every time the program launches
createSQLData(populateSQLTable, main);

// Program starts and asks for user input
    function main(){
        
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
        };
    };

//Function to add data to the pre-existing data
    function addData(){
        
        console.log("\nSeleccion el tipo de nave: \n1. Transportador\n2. Tripulada\n3. No-Tripulada \n");
        const spaceCraftType = input("> ");

            if (spaceCraftType == 1) {
                shuttleAddData();
            } else if (spaceCraftType == 2) {
                mannedAddData();
            } else if (spaceCraftType == 3) {
                unmannedAddData();
            } else if (spaceCraftType === null) {
                return;
            } else {
                console.log("Opcion invalida");
            }
    }

//If shuttle is selected
    function shuttleAddData(){

        spacecrafts.shuttles[parseInt(Object.keys(spacecrafts.shuttles).pop()) + 1]= {
            name: input("Ingrese el nombre de la nave: "),
            country: input("Ingrese el pais de fabricacion: "),
            combustible: input("Ingrese el tipo de combustible: "),
            startYear: input("Ingrese el año de fabricacion: "),
            endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
        }

                                    //Data gets added to the database
        addNewSQLData(
            "type",
            Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[0], 
            Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[1], 
            Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[2], 
            Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[3], 
            Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[4], 
            "Shuttle",
            Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[0],
            Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[1],
            Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[2],
            Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[3],
            Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[4]
            ).then( () => {
                input("");
                main();
            });
    };
            
//If manned is selected
    function mannedAddData(){

        spacecrafts.manned[parseInt(Object.keys(spacecrafts.manned).pop()) + 1]= {
            name: input("Ingrese el nombre de la nave: "),
            country: input("Ingrese el pais de fabricacion: "),
            maxCrew: input("Ingrese el numero maximo de tripulantes: "),
            startYear: input("Ingrese el año de fabricacion: "),
            endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
        }
                                    //Data gets added to the database
        addNewSQLData(
            "type",
            Object.keys(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[0],
            Object.keys(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[1],
            Object.keys(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[2],
            Object.keys(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[3],
            Object.keys(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[4],
            "Manned",
            Object.values(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[0],
            Object.values(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[1],
            Object.values(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[2],
            Object.values(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[3],
            Object.values(spacecrafts.manned[Object.keys(spacecrafts.manned).pop()])[4]
            ).then( () => {
                input("");
                main();
            });
    };

//If unmanned is selected
    function unmannedAddData(){

        spacecrafts.unmanned[parseInt(Object.keys(spacecrafts.unmanned).pop()) + 1]= {
            name: input("Ingrese el nombre de la nave: "),
            country: input("Ingrese el pais de fabricacion: "),
            objectStudy: input("Ingrese el objetivo de estudio: "),
            startYear: input("Ingrese el año de fabricacion: "),
            endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
        }
                                    //Data gets added to the database
        addNewSQLData(
            "type",
            Object.keys(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[0],
            Object.keys(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[1],
            Object.keys(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[2],
            Object.keys(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[3],
            Object.keys(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[4],
            "Unmanned",
            Object.values(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[0],
            Object.values(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[1],
            Object.values(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[2],
            Object.values(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[3],
            Object.values(spacecrafts.unmanned[Object.keys(spacecrafts.unmanned).pop()])[4]
            ).then( () => {
                input("");
                main();
            });
    };

//------------------------------------------Database stuff----------------------------------------------------------------------------------------------

// Function to filter data and print all the rows that meet the selected criteria
    function searchData(parameter, value) {
    
        let sqlParameter = "";

        switch (parameter) {
            case "1":
                sqlParameter = "type"
                break;
            case "2":
                sqlParameter = "name"
                break;
            case "3":
                sqlParameter = "country"
                break;
            case "4":
                sqlParameter = "combustible"
                break;
            case "5":
                sqlParameter = "startYear"
                break;
            case "6":
                sqlParameter = "endYear"
                break;
            case "7":
                sqlParameter = "maxCrew"
                break;
            case "8":
                sqlParameter = "objectStudy"
                break;
        }

        let query = "SELECT * FROM spacecrafts WHERE " + sqlParameter + " LIKE '%" + value + "%';";

        pool.query(query, function(err, result, fields) {
            if(err) throw err;  
            console.table(result)
            input("Presiona ENTER para continuar...");
            main();
        });
    };

//Function to display the current SQL table
    function lookUpAllSQLData() {

        let lookup = "SELECT * FROM spacecrafts;"
        pool.execute(lookup, function(err, result) {
            if(err) throw err;
            console.table(result);
            input("Presione ENTER para regresar...");
            main();  
        });
    };


//Function to populate the SQL table with the predetermined data
    function populateSQLTable(){

        let sqlFill = `INSERT INTO spacecrafts(
            type,
            name,
            country,
            combustible,
            startYear,
            endYear,
            maxCrew,
            ObjectStudy)
            VALUES(
            'Shuttle',
            'Saturn V',
            'USA',
            'Kerosene',
            '1960',
            '1980',
            '-',
            '-'), 
            (
            'Shuttle',
            'Space Shuttle',
            'USA',
            'Hydrogen',
            '1980',
            '2011',
            '-',
            '-'),
            (
            'Shuttle',
            'Ariane 5',
            'Europe',
            'Hydrogen',
            '1960',
            'Actualidad',
            '-',
            '-'),
            (
            'Manned',
            'Dragon V2',
            'USA',
            '-',
            '2012',
            'Actualidad',
            '4',
            '-'),
            (
            'Manned',
            'Apollo',
            'USA',
            '-',
            '1960',
            '1980',
            '3',
            '-'),
            (
            'Manned',
            'Soyuz',
            'Russia',
            '-',
            '1960',
            'Actualidad',
            '3',
            '-'),
            (
            'Unmanned',
            'Voyager 2',
            'USA',
            '-',
            '1960',
            'Actualidad',
            '-',
            'Interstellar Space'),
            (
            'Unmanned',
            'New Horizons',
            'Europe',
            '-',
            '2005',
            '2018',
            '-',
            'Pluto'),
            (
            'Unmanned',
            'Cassini-Huygens',
            'Europe',
            '-',
            '2005',
            '2017',
            '-',
            'Saturn')
            ;`;

        pool.execute(sqlFill, function(err, result) {
            if(err) throw err;  
        });

    };


//This function adds the new data entered by the user
    function addNewSQLData(par1, par2, par3, par4, par5, par6, val1, val2, val3, val4, val5, val6) {

        let sqlData = "INSERT INTO spacecrafts(" + par1 + ", " + par2 + ", " + par3 + ", " + par4 + ", " + par5 + ", " + par6 + ") VALUES('" + val1 + "', '" + val2 + "', '" + val3 + "', '" + val4 + "', '" + val5 + "', '" + val6 + "');";

        return new Promise((resolve, reject) => {
            
            pool.execute(sqlData, function(err, result) {
            if(err) reject();
            console.log("\nDatos agregados satisfactoriamente!\nPresiona ENTER para continuar...");
            resolve();
            })
        })
    };

// This function deletes the table if it exists, creates it back again and populates it by calling back the populateSQLData function. Then it executes the main part of the program.
// This is done to reset the data everytime the program is closed and re-opened
    function createSQLData(callback, callback2) {
        
        let sqlDrop = "DROP TABLE IF EXISTS spacecrafts;";

        pool.execute(sqlDrop, function(err, result) {
            if(err) throw err;  
        });

        let sqlCreate = `
        CREATE TABLE SofkaU.spacecrafts( 
            id INT NOT NULL AUTO_INCREMENT,
            type VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            country VARCHAR(255) NOT NULL,
            combustible VARCHAR(255) NOT NULL DEFAULT '-',
            startYear VARCHAR(255) NOT NULL,
            endYear VARCHAR(255) NOT NULL,
            maxCrew VARCHAR(255) NOT NULL DEFAULT '-',
            objectStudy VARCHAR(255) NOT NULL DEFAULT '-',
            PRIMARY KEY (id)
            );`;

    pool.execute(sqlCreate, function(err, result) {
            if(err) throw err;  
            callback();
            callback2();
        });

        
    };