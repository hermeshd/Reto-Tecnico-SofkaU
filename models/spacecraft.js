//Creates Spacecraft class where all the common properties are defined for each type of spacecraft
export class Spacecraft {
    constructor(name, country, startYear, endYear){
        this.name = name;
        this.country = country;
        this.startYear = startYear;
        this.endYear = endYear;
    }
    //Some functions to personalize a bit the result
    added(){
        console.log("\nAgregando nave '" + this.name + "'...");
        return this;
    }
    success(){
        let i = 0;
        console.log("\n" + this.name + " agregado(a) exitosamente");
        return this;
    }
}





