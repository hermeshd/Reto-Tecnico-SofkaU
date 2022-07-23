// Setting up base information for the database
// let shuttles = [
//     ["Saturn V", "USA", "Kerosene", 1960, 1980],
//     ["Space Shuttle", "USA", "Hydrogen", 1980, 2011],
//     ["Ariane 5", "Europe", "Hydrogen", 1960, "Actualidad"],
// ];

// let manned = [
//     ["Dragon V2", "USA", 4, 2012, "Actualidad"],
//     ["Apollo", "USA", 3, 1960, 1980],
//     ["Soyuz", "Russia", 3, 1960, "Actualidad"],
// ];

// let unmanned = [
//     ["Voyager 2", "USA", "Interstellar space", 1960, "Actualidad"],
//     ["New Horizons", "USA", "Pluto", 2005, 2018],
//     ["Cassini-Huygens", "Europe", "Saturn", 2005, 2017],
// ];

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

// Program starts
function main(){
    // console.table(shuttles);
    // console.table(manned);
    // console.table(unmanned);

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


function addData(){
    const spaceCraftType = prompt("Seleccion el tipo de nave: \n1. Transportador\n2. Tripulada\n3. No Tripulada");

        if (spaceCraftType == 1) {
            const shuttleName = prompt("Ingrese el nombre de la nave: ");
            const shuttleCountry = prompt("Ingrese el pais de fabricacion: ");
            const shuttleCombustible = prompt("Ingrese el tipo de combustible: ");
            const shuttleStartYear = prompt("Ingrese el año de fabricacion: ");
            const shuttleEndYear = prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ");
            // Data gets added to database
            spacecrafts.shuttles[parseInt(Object.keys(spacecrafts.shuttles).pop()) + 1]= {
                name: shuttleName,
                country: shuttleCountry,
                combustible: shuttleCombustible,
                startYear: shuttleStartYear,
                endYear: shuttleEndYear
            }
            alert("Datos agregados satisfactoriamente!");
            main();

        } else if (spaceCraftType == 2) {
            const mannedName = prompt("Ingrese el nombre de la nave: ");
            const mannedCountry = prompt("Ingrese el pais de fabricacion: ");
            const mannedMaxCrew = prompt("Ingrese la cantidad maxima de la tripulacion: ");
            const mannedStartYear = prompt("Ingrese el año de fabricacion: ");
            const mannedEndYear = prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ");
            // Data gets added to database
            manned.push([mannedName, mannedCountry, mannedMaxCrew, mannedStartYear, mannedEndYear]);
            alert("Datos agregados satisfactoriamente!");
            main();

        } else if (spaceCraftType == 3) {
            const unmannedName = prompt("Ingrese el nombre de la nave: ");
            const unmannedCountry = prompt("Ingrese el pais de fabricacion: ");
            const unmannedObjectStudy = prompt("Ingrese el tipo de combustible: ");
            const unmannedStartYear = prompt("Ingrese el año de fabricacion: ");
            const unmannedEndYear = prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ");
            // Data gets added to database
            unmanned.push([unmannedName, unmannedCountry, unmannedObjectStudy, unmannedStartYear, unmannedEndYear]);
            alert("Datos agregados satisfactoriamente!");
            main();

        } else if (spaceCraftType === null) {
            return;

        } else {
            alert("Opcion invalida");
        }
}

main();