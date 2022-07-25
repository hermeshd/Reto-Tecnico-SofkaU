import { Spacecraft } from "./spacecraft.js";

//Manned child class. maxCrew is a unique property of this class
export class Manned extends Spacecraft {
    constructor(name, country, startYear, endYear, maxCrew){
        super(name, country, startYear, endYear);
        this.maxCrew = maxCrew;
    }
    added(){
        console.log("\nAgregando nave tripulada '" + this.name, "' ...");
        return this;
    }
}