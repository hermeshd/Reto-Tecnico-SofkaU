


// This function deletes the table if it exists, creates it back again and populates it by calling back the populateSQLData function. Then it executes the main part of the program.

import {pool} from "../../main.js";

// This is done to reset the data everytime the program is closed and re-opened
export default function createSQLData(callback, callback2) {
        
    let sqlDrop = "DROP TABLE IF EXISTS spacecrafts;";

   
    pool.execute(sqlDrop, function(err, result) {
        if(err) throw err;  
    });

    let sqlCreate = `
    CREATE TABLE SofkaU.spacecrafts( 
        id INT NOT NULL AUTO_INCREMENT,
        type VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        combustible VARCHAR(255) NOT NULL DEFAULT '-',
        startYear VARCHAR(255) NOT NULL,
        endYear VARCHAR(255) NOT NULL,
        maxCrew VARCHAR(255) NOT NULL DEFAULT '-',
        objectStudy VARCHAR(255) NOT NULL DEFAULT '-',
        PRIMARY KEY (id)
        );`;

    pool.execute(sqlCreate, function(err, result) {
        if(err) throw err;
        callback();
        callback2();
    });
};
