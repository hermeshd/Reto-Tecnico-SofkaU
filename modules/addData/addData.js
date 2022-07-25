import shuttleAddData from "./shuttleAddData.js";
import mannedAddData from "./mannedAddData.js";
import unmannedAddData from "./unmannedAddData.js";
import {input} from "../main.js"
// import input from "prompt-sync";
// const main = ("../main.js");

//Function to add data to the pre-existing data
export default function addData(){
        
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
            console.log("\nPresiona ENTER para regresar...");
            input.hide("> ");
            main();
        }
}