import {pool} from "../../main.js";

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
        'Shuttle',
        'Saturn V',
        'USA',
        'Kerosene',
        '1960',
        '1980',
        '-',
        '-'), 
        (
        'Shuttle',
        'Space Shuttle',
        'USA',
        'Hydrogen',
        '1980',
        '2011',
        '-',
        '-'),
        (
        'Shuttle',
        'Ariane 5',
        'Europe',
        'Hydrogen',
        '1960',
        'Actualidad',
        '-',
        '-'),
        (
        'Manned',
        'Dragon V2',
        'USA',
        '-',
        '2012',
        'Actualidad',
        '4',
        '-'),
        (
        'Manned',
        'Apollo',
        'USA',
        '-',
        '1960',
        '1980',
        '3',
        '-'),
        (
        'Manned',
        'Soyuz',
        'Russia',
        '-',
        '1960',
        'Actualidad',
        '3',
        '-'),
        (
        'Unmanned',
        'Voyager 2',
        'USA',
        '-',
        '1960',
        'Actualidad',
        '-',
        'Interstellar Space'),
        (
        'Unmanned',
        'New Horizons',
        'Europe',
        '-',
        '2005',
        '2018',
        '-',
        'Pluto'),
        (
        'Unmanned',
        'Cassini-Huygens',
        'Europe',
        '-',
        '2005',
        '2017',
        '-',
        'Saturn')
        ;`;

    pool.execute(sqlFill, function(err, result) {
        if(err) throw err;  
    });

};
