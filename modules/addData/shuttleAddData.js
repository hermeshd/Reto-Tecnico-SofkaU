import * as addNewSQLData from "../databaseStuff/addNewSQLData.js";
import * as main from "../../main.js";
import { spacecrafts, input } from "../../main.js";


//If shuttle is selected
export default function shuttleAddData(){

    spacecrafts.shuttles[parseInt(Object.keys(spacecrafts.shuttles).pop()) + 1]= {
        name: input("Ingrese el nombre de la nave: "),
        country: input("Ingrese el pais de fabricacion: "),
        combustible: input("Ingrese el tipo de combustible: "),
        startYear: input("Ingrese el año de fabricacion: "),
        endYear: input("Ingrese el año de retiro de la nave (Ingrese '0' si aun esta operativa): ")
    }

                                //Data gets added to the database
    addNewSQLData.default(
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
            main.default();
        });
};
     