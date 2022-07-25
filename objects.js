export class Shuttles {
    constructor(name, country, startYear, endYear, combustible){

        this.type = "Transportador";
        this.name = name;
        this.country = country;
        this.startYear = startYear;
        this.endYear = endYear;
        this.combustible = combustible;

    }
}

export class Manned {
    constructor(name, country, startYear, endYear, maxCrew){

        this.type = "Tripulada";
        this.name = name;
        this.country = country;
        this.startYear = startYear;
        this.endYear = endYear;
        this.maxCrew = maxCrew;

    }
}

export class Unmanned {
    constructor(name, country, startYear, endYear, objectStudy){

        this.type = "No-Tripulada";
        this.name = name;
        this.country = country;
        this.startYear = startYear;
        this.endYear = endYear;
        this.objectStudy = objectStudy;

    }
}
