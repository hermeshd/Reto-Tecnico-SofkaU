import * as addNewSQLData from "../databaseStuff/addNewSQLData.js";
import * as main from "../../main.js";
import { input } from "../../main.js";
import { Unmanned } from "../../objects.js";

//If unmanned is selected
export default function unmannedAddData(){

    var newSpacecraft = new Unmanned(
        input("Ingrese el nombre de la nave: "),
        input("Ingrese el pais de fabricacion: "),
        input("Ingrese el año de fabricacion: "),
        input("Ingrese el año de termino de la mision (Ingrese '0' si aun esta en funcionamiento): "),
        input("Ingrese el objeto estudiado por esta nave: ")
        );
        if (newSpacecraft.endYear == "0") {
            newSpacecraft.endYear = "Actualidad";
        };
                            //Data gets added to the database
addNewSQLData.default(
    "type",
    "name", 
    "country", 
    "objectStudy", 
    "startYear", 
    "endYear", 
    newSpacecraft.type,
    newSpacecraft.name,
    newSpacecraft.country,
    newSpacecraft.objectStudy,
    newSpacecraft.startYear,
    newSpacecraft.endYear
    ).then( () => {
        input("");
        main.default();
    });
};
