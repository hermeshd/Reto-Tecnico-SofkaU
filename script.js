

// Program starts
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


function addData(){
    const spaceCraftType = prompt("Seleccion el tipo de nave: \n1. Transportador\n2. Tripulada\n3. No Tripulada");
    
        if (spaceCraftType == 1) {
            const shuttleName = prompt("Ingrese el nombre de la nave: ");
            const shuttleCountry = prompt("Ingrese el pais de fabricacion: ");
            const shuttleCombustible = prompt("Ingrese el tipo de combustible: ");
            const shuttleStartYear = prompt("Ingrese el año de fabricacion: ");
            const shuttleEndYear = prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ");
            alert("Datos agregados satisfactoriamente!");
            // Data gets added to database
            main();

        } else if (spaceCraftType == 2) {
            const mannedName = prompt("Ingrese el nombre de la nave: ");
            const mannedCountry = prompt("Ingrese el pais de fabricacion: ");
            const mannedCombustible = prompt("Ingrese el tipo de combustible: ");
            const mannedStartYear = prompt("Ingrese el año de fabricacion: ");
            const mannedEndYear = prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ");
            alert("Datos agregados satisfactoriamente!");
            // Data gets added to database
            main();

        } else if (spaceCraftType == 3) {
            const unmannedName = prompt("Ingrese el nombre de la nave: ");
            const unmannedCountry = prompt("Ingrese el pais de fabricacion: ");
            const unmannedCombustible = prompt("Ingrese el tipo de combustible: ");
            const unmannedStartYear = prompt("Ingrese el año de fabricacion: ");
            const unmannedEndYear = prompt("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ");
            alert("Datos agregados satisfactoriamente!");
            // Data gets added to database
            main();

        } else if (spaceCraftType === null) {
            return;

        } else {
            alert("Opcion invalida");
        }
}

main();