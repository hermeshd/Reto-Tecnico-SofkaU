import * as addNewSQLData from "../databaseStuff/addNewSQLData.js";
import * as main from "../../main.js";
import { input } from "../../main.js";
import { Manned } from "../../models/manned.js";

//If manned is selected
export default function mannedAddData(){

    var newSpacecraft = new  Manned(
        input("Ingrese el nombre de la nave: "),
        input("Ingrese el pais de fabricacion: "),
        input("Ingrese el año de fabricacion: "),
        input("Ingrese el año de termino de la mision (Ingrese '0' si aun esta en funcionamiento): "),
        input("Ingrese la capacidad maxima de personas en la nave: ")
        );
        if (newSpacecraft.endYear == "0") {
            newSpacecraft.endYear = "Actualidad";
        };

        newSpacecraft.added().success();

                                //Data gets added to the database
    addNewSQLData.default(
        "type",
        "name", 
        "country", 
        "maxCrew", 
        "startYear", 
        "endYear", 
        "Tripulada",
        newSpacecraft.name,
        newSpacecraft.country,
        newSpacecraft.maxCrew,
        newSpacecraft.startYear,
        newSpacecraft.endYear
        ).then( () => {
            input("");
            main.default();
        });
};
