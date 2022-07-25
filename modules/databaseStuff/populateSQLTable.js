import {pool} from "../../db.js";

//Function to populate the SQL table with the predetermined data
export default function populateSQLTable(){

    let sqlFill = `INSERT INTO spacecrafts(
        type,
        name,
        country,
        combustible,
        startYear,
        endYear,
        maxCrew,
        ObjectStudy)
        VALUES(
        'Transportador',
        'Saturn V',
        'USA',
        'Keroseno',
        '1960',
        '1980',
        '-',
        '-'), 
        (
        'Transportador',
        'Space Shuttle',
        'USA',
        'Hidrogeno',
        '1980',
        '2011',
        '-',
        '-'),
        (
        'Transportador',
        'Ariane 5',
        'Europa',
        'Hidrogeno',
        '1960',
        'Actualidad',
        '-',
        '-'),
        (
        'Tripulada',
        'Dragon V2',
        'USA',
        '-',
        '2012',
        'Actualidad',
        '4',
        '-'),
        (
        'Tripulada',
        'Apollo',
        'USA',
        '-',
        '1960',
        '1980',
        '3',
        '-'),
        (
        'Tripulada',
        'Soyuz',
        'Rusia',
        '-',
        '1960',
        'Actualidad',
        '3',
        '-'),
        (
        'No-Tripulada',
        'Voyager 2',
        'USA',
        '-',
        '1960',
        'Actualidad',
        '-',
        'Espacio Interestelar'),
        (
        'No-Tripulada',
        'New Horizons',
        'Europa',
        '-',
        '2005',
        '2018',
        '-',
        'Pluton'),
        (
        'No-Tripulada',
        'Cassini-Huygens',
        'Europa',
        '-',
        '2005',
        '2017',
        '-',
        'Saturno')
        ;`;

    pool.execute(sqlFill, function(err, result) {
        if(err) throw err;  
    });

};
