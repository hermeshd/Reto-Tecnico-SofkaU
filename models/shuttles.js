import { Spacecraft } from "./spacecraft.js";

//Shuttle child class. Combustible is a unique property of this class
export class Shuttles extends Spacecraft {
    constructor(name, country, startYear, endYear, combustible){
        super(name, country, startYear, endYear);
        this.combustible = combustible;
    }
    added(){
        console.log("\nAgregando transportador '" + this.name, "' ...");
        return this;
    }
}