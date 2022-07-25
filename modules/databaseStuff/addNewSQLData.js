import { pool } from "../main.js";

//This function adds the new data entered by the user
export default function addNewSQLData(par1, par2, par3, par4, par5, par6, val1, val2, val3, val4, val5, val6) {

    let sqlData = "INSERT INTO spacecrafts(" + par1 + ", " + par2 + ", " + par3 + ", " + par4 + ", " + par5 + ", " + par6 + ") VALUES('" + val1 + "', '" + val2 + "', '" + val3 + "', '" + val4 + "', '" + val5 + "', '" + val6 + "');";

    return new Promise((resolve, reject) => {
        
        
        pool.execute(sqlData, function(err, result) {
        if(err) reject();
        console.log("\nDatos agregados satisfactoriamente!\n\nPresiona ENTER para continuar...");
        resolve();
        })
    })
};
