import * as addNewSQLData from "../databaseStuff/addNewSQLData.js";
import * as main from "../main.js";
import { spacecrafts, input } from "../main.js";

//If manned is selected
export default function mannedAddData(){

    spacecrafts.manned[parseInt(Object.keys(spacecrafts.manned).pop()) + 1]= {
        name: input("Ingrese el nombre de la nave: "),
        country: input("Ingrese el pais de fabricacion: "),
        maxCrew: input("Ingrese el numero maximo de tripulantes: "),
        startYear: input("Ingrese el año de fabricacion: "),
        endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
    }
                                //Data gets added to the database
    addNewSQLData.default(
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
            main.default();
        });
};
