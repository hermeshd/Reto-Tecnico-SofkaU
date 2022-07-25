import * as main from "../../main.js";
import {pool, input} from "../../main.js";

// Function to filter data and print all the rows that meet the selected criteria
export default function searchData(parameter, value) {
    
    let sqlParameter = "";

    switch (parameter) {
        case "1":
            sqlParameter = "type"
            break;
        case "2":
            sqlParameter = "name"
            break;
        case "3":
            sqlParameter = "country"
            break;
        case "4":
            sqlParameter = "combustible"
            break;
        case "5":
            sqlParameter = "startYear"
            break;
        case "6":
            sqlParameter = "endYear"
            break;
        case "7":
            sqlParameter = "maxCrew"
            break;
        case "8":
            sqlParameter = "objectStudy"
            break;
    }

    let query = "SELECT * FROM spacecrafts WHERE " + sqlParameter + " LIKE '%" + value + "%';";

    pool.query(query, function(err, result, fields) {
        if(err) throw err;  
        console.table(result)
        console.log("Presiona ENTER para continuar...");
        input.hide("> ");
        main.default();
    });
};