//Pre-existed data used by the program
let spacecrafts = {
    shuttles: {
        0: {
            name: "Saturn V",
            country: "USA",
            combustible: "Kerosene",
            startYear: "1960",
            endYear: "1980"
        },
        1: {
            name: "Space Shuttle",
            country: "USA",
            combustible: "Hydrogen",
            startYear: "1980",
            endYear: "2011"
        },
        2: {
            name: "Ariane 5",
            country: "Europe",
            combustible: "Hydrogen",
            startYear: "1960",
            endYear: "Actualidad"
        }
    },
    manned: {
        0: {
            name: "DragonV2",
            country: "USA",
            maxCrew: "4",
            startYear: "2012",
            endYear: "Actualidad"
        },
        1: {
            name: "Apollo",
            country: "USA",
            maxCrew: "3",
            startYear: "1960",
            endYear: "1980"
        },
        2: {
            name: "Soyuz",
            country: "Russia",
            maxCrew: "3",
            startYear: "1960",
            endYear: "Actualidad"
        }
    },
    unmanned: {
        0: {
            name: "Voyager 2",
            country: "USA",
            objectStudy: "Interstellar Space",
            startYear: "1960",
            endYear: "Actualidad"
        },
        1: {
            name: "New Horizons",
            country: "Europe",
            objectStudy: "Pluto",
            startYear: "2005",
            endYear: "2018"
        },
        2: {
            name: "Cassini-Huygens",
            country: "Europe",
            objectStudy: "Saturn",
            startYear: "2005",
            endYear: "2017"
        }
    }
}

// console.log(spacecrafts);
// let stringSpacecrafts = JSON.stringify(spacecrafts);


//Prompt sync function. This is necessary to accept input directly from the NodeJS console
const input = require('prompt-sync')();

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: "localhost",
    user: "hermes",
    password: "1234",
    database: "SofkaU"
});

//Deletes previous SQL table and creates an identical one with base data
createSQLData(main);

//Start program



// Program starts and asks for user input
function main(){


    console.log("Seleccione una opcion: \n1. Agregar \n2. Buscar\n");
    const action = input("> ");

    if (action == 1) {
        addData();
    } else if (action == 2) {
        searchData();
    } else if (action === null) {
        return;
    } else {
        console.log("Opcion invalida");
    }   
}


//Function to add data to the pre-existing data
function addData(){
    
    console.log("\nSeleccion el tipo de nave: \n1. Transportador\n2. Tripulada\n3. No Tripulada \n");
    const spaceCraftType = input("> ");

        //If shuttle is selected
        if (spaceCraftType == 1) {
            // Data gets added to database
            spacecrafts.shuttles[parseInt(Object.keys(spacecrafts.shuttles).pop()) + 1]= {
                name: input("Ingrese el nombre de la nave: "),
                country: input("Ingrese el pais de fabricacion: "),
                combustible: input("Ingrese el tipo de combustible: "),
                startYear: input("Ingrese el año de fabricacion: "),
                endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
            }

            addNewSQLData("type",
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
                ).then(()=>{
                    input("");
                    main();
                });
            console.log(spacecrafts);
            console.log("\nDatos agregados satisfactoriamente!");
            // console.log(JSON.stringify(spacecrafts));
            // console.log(spacecrafts.shuttles);
            
            
            //If manned is selected
        } else if (spaceCraftType == 2) {
            spacecrafts.manned[parseInt(Object.keys(spacecrafts.manned).pop()) + 1]= {
                name: input("Ingrese el nombre de la nave: "),
                country: input("Ingrese el pais de fabricacion: "),
                maxCrew: input("Ingrese el numero maximo de tripulantes: "),
                startYear: input("Ingrese el año de fabricacion: "),
                endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
            }

            addNewSQLData(
                "type",
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[0],
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[1],
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[2],
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[3],
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[4],
                "Manned",
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[0],
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[1],
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[2],
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[3],
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[4]
                );
            console.log("\nDatos agregados satisfactoriamente!\n");
            input("");
            main();

        //If unmanned is selected
        } else if (spaceCraftType == 3) {
            spacecrafts.unmanned[parseInt(Object.keys(spacecrafts.unmanned).pop()) + 1]= {
                name: input("Ingrese el nombre de la nave: "),
                country: input("Ingrese el pais de fabricacion: "),
                objectStudy: input("Ingrese el objetivo de estudio: "),
                startYear: input("Ingrese el año de fabricacion: "),
                endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
            }
            addNewSQLData(
                "type",
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[0],
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[1],
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[2],
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[3],
                Object.keys(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[4],
                "Unmanned",
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[0],
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[1],
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[2],
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[3],
                Object.values(spacecrafts.shuttles[Object.keys(spacecrafts.shuttles).pop()])[4]
                );
            console.log("\nDatos agregados satisfactoriamente!");
            input("");
            main();

        } else if (spaceCraftType === null) {
            return;

        } else {
            console.log("Opcion invalida");
        }
}


//Database stuff

// let stringSpacecrafts = JSON.stringify(spacecrafts);

function addNewSQLData(par1, par2, par3, par4, par5, par6, val1, val2, val3, val4, val5, val6) {

    let sqlData = "INSERT INTO spacecrafts(" + par1 + ", " + par2 + ", " + par3 + ", " + par4 + ", " + par5 + ", " + par6 + ") VALUES('" + val1 + "', '" + val2 + "', '" + val3 + "', '" + val4 + "', '" + val5 + "', '" + val6 + "');";

    return new Promise((resolve, reject) => {pool.execute(sqlData, function(err, result) {
        if(err) reject();  
        console.log(result);
        resolve();
    })
})
};

function createSQLData(callback) {
    
    let sqlDrop = "DROP TABLE spacecrafts;";

    pool.execute(sqlDrop, function(err, result) {
        if(err) throw err;  
        console.log(result);
    });

    let sqlCreate = "CREATE TABLE `SofkaU`.`spacecrafts` (`id` INT NOT NULL AUTO_INCREMENT,`type` VARCHAR(255) NOT NULL,`name` VARCHAR(255) NOT NULL,`country` VARCHAR(255) NOT NULL,`combustible` VARCHAR(255) NOT NULL DEFAULT 'None',`startYear` VARCHAR(255) NOT NULL,`endYear` VARCHAR(255) NOT NULL,`maxCrew` VARCHAR(255) NOT NULL DEFAULT 'None',`objectStudy` VARCHAR(255) NOT NULL DEFAULT 'None', PRIMARY KEY (`id`));";

   pool.execute(sqlCreate, function(err, result) {
        if(err) throw err;  
        console.log(result);
        callback();
    });
};

