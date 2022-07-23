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
            country: "USA",
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
            country: "USA",
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
            country: "USA",
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

console.log(spacecrafts);

// Program starts and asks for user input
function main(){

    const action = prompt("Seleccione una opcion: \n1. Agregar\n2. Buscar ")

    if (action == 1) {
        addData();
    } else if (action == 2) {
        searchData();
    } else if (action === null) {
        return;
    } else {
        alert("Opcion invalida");
    }   
}


//Function to add data to the pre-existing data
function addData(){
    
    const spaceCraftType = prompt("Seleccion el tipo de nave: \n1. Transportador\n2. Tripulada\n3. No Tripulada");

        //If shuttle is selected
        if (spaceCraftType == 1) {
            // Data gets added to database
            spacecrafts.shuttles[parseInt(Object.keys(spacecrafts.shuttles).pop()) + 1]= {
                name: prompt("Ingrese el nombre de la nave: "),
                country: prompt("Ingrese el pais de fabricacion: "),
                combustible: prompt("Ingrese el tipo de combustible: "),
                startYear: prompt("Ingrese el año de fabricacion: "),
                endYear: prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
            }
            alert("Datos agregados satisfactoriamente!");
            main();

        //If manned is selected
        } else if (spaceCraftType == 2) {
            spacecrafts.manned[parseInt(Object.keys(spacecrafts.manned).pop()) + 1]= {
                name: prompt("Ingrese el nombre de la nave: "),
                country: prompt("Ingrese el pais de fabricacion: "),
                maxCrew: prompt("Ingrese el numero maximo de tripulantes: "),
                startYear: prompt("Ingrese el año de fabricacion: "),
                endYear: prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
            }
            alert("Datos agregados satisfactoriamente!");
            main();

        //If unmanned is selected
        } else if (spaceCraftType == 3) {
            spacecrafts.unmanned[parseInt(Object.keys(spacecrafts.unmanned).pop()) + 1]= {
                name: prompt("Ingrese el nombre de la nave: "),
                country: prompt("Ingrese el pais de fabricacion: "),
                objectStudy: prompt("Ingrese el objetivo de estudio: "),
                startYear: prompt("Ingrese el año de fabricacion: "),
                endYear: prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
            }
            alert("Datos agregados satisfactoriamente!");
            main();

        } else if (spaceCraftType === null) {
            return;

        } else {
            alert("Opcion invalida");
        }
}

main();