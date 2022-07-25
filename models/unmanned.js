import { Spacecraft } from "./spacecraft.js";

//Unmanned child class. objectStudy is a unique property of this class
export class Unmanned extends Spacecraft {
    constructor(name, country, startYear, endYear, objectStudy){
        super(name, country, startYear, endYear);
        this.objectStudy = objectStudy;
    }
    added(){
        console.log("\nAgregando nave no-tripulada '" + this.name, "' ...");
        return this;
    }
}