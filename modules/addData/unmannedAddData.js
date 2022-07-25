import * as addNewSQLData from "../databaseStuff/addNewSQLData.js";
import * as main from "../main.js";
import { spacecrafts, input } from "../main.js";

//If unmanned is selected
export default function unmannedAddData(){

    spacecrafts.unmanned[parseInt(Object.keys(spacecrafts.unmanned).pop()) + 1]= {
        name: input("Ingrese el nombre de la nave: "),
        country: input("Ingrese el pais de fabricacion: "),
        objectStudy: input("Ingrese el objetivo de estudio: "),
        startYear: input("Ingrese el año de fabricacion: "),
        endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
    }
                                //Data gets added to the database
    addNewSQLData.default(
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
            main.default();
        });
};
