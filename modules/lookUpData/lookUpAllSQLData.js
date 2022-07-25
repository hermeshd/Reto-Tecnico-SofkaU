import * as main from "../../main.js";
import {pool, input} from "../../main.js";

//Function to display the current SQL table
export default function lookUpAllSQLData() {

    let lookup = "SELECT * FROM spacecrafts;"
    pool.execute(lookup, function(err, result) {
        if(err) throw err;
        console.table(result);
        console.log("Presione ENTER para regresar...");
        input.hide("> ");
        main.default();  
    });
};