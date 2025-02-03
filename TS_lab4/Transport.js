"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let Docs;
    (function (Docs) {
        Docs["Pass"] = "Passport";
        Docs["DriverLicense"] = "DriverLicense";
        Docs["ID"] = "IDCard";
    })(Docs = Transport.Docs || (Transport.Docs = {}));
    ;
    class OwnerClass {
        constructor(surname, name, patronymics, birthdate, docType, docSeries, docNumber) {
            this.surname = surname;
            this.name = name;
            this.patronymics = patronymics;
            this.birthdate = birthdate;
            this.docType = docType;
            this.docSeries = docSeries;
            this.docNumber = docNumber;
        }
        get Surname() {
            return this.surname;
        }
        set Surname(value) {
            this.surname = value;
        }
        get Name() {
            return this.name;
        }
        set Name(value) {
            this.name = value;
        }
        get Patronymics() {
            return this.patronymics;
        }
        set Patronymics(value) {
            this.patronymics = value;
        }
        get Birthdate() {
            return this.birthdate;
        }
        set Birthdate(value) {
            this.birthdate = value;
        }
        get DocType() {
            return this.docType;
        }
        set DocType(value) {
            this.docType = value;
        }
        get DocSeries() {
            return this.docSeries;
        }
        set DocSeries(value) {
            this.docSeries = value;
        }
        get DocNumber() {
            return this.docNumber;
        }
        set DocNumber(value) {
            this.docNumber = value;
        }
        printInfo() {
            console.log(`Surname: ${this.surname}`);
            console.log(`Name: ${this.name}`);
            console.log(`Patronymics: ${this.patronymics}`);
            console.log(`Birth date: ${this.birthdate}`);
            console.log(`Doc type: ${this.docType}`);
            console.log(`Doc series: ${this.docSeries}`);
            console.log(`Doc Number: ${this.docNumber}`);
        }
    }
    Transport.OwnerClass = OwnerClass;
    class Car {
        constructor(brand, model, year, vin, registrationNumber, owner) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
        get Brand() {
            return this.brand;
        }
        set Brand(value) {
            this.brand = value;
        }
        get Model() {
            return this.model;
        }
        set Model(value) {
            this.model = value;
        }
        get Year() {
            return this.year;
        }
        set Year(value) {
            this.year = value;
        }
        get Vin() {
            return this.vin;
        }
        set Vin(value) {
            this.vin = value;
        }
        get RegistrationNumber() {
            return this.registrationNumber;
        }
        set RegistrationNumber(value) {
            this.registrationNumber = value;
        }
        get Owner() {
            return this.owner;
        }
        set Owner(value) {
            this.owner = value;
        }
        displayInfo() {
            console.log(`Brand: ${this.brand}`);
            console.log(`Model: ${this.model}`);
            console.log(`Prod. year: ${this.year}`);
            console.log(`VIN: ${this.vin}`);
            console.log(`Registration num: ${this.registrationNumber}`);
            this.owner.printInfo();
        }
    }
    Transport.Car = Car;
    let BodyType;
    (function (BodyType) {
        BodyType["sedan"] = "Sedan";
        BodyType["coupe"] = "Coupe";
        BodyType["crossover"] = "Crossover";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    ;
    let CarType;
    (function (CarType) {
        CarType["Economy"] = "Economy";
        CarType["Buisiness"] = "Buisiness";
        CarType["Luxury"] = "Luxury";
    })(CarType = Transport.CarType || (Transport.CarType = {}));
    ;
    class Car2Class {
        constructor(brand, model, year, vin, registrationNumber, owner, btype, ccar) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.btype = btype;
            this.ccar = ccar;
        }
        get Brand() {
            return this.brand;
        }
        set Brand(value) {
            this.brand = value;
        }
        get Model() {
            return this.model;
        }
        set Model(value) {
            this.model = value;
        }
        get Year() {
            return this.year;
        }
        set Year(value) {
            this.year = value;
        }
        get Vin() {
            return this.vin;
        }
        set Vin(value) {
            this.vin = value;
        }
        get RegistrationNumber() {
            return this.registrationNumber;
        }
        set RegistrationNumber(value) {
            this.registrationNumber = value;
        }
        get Owner() {
            return this.owner;
        }
        set Owner(value) {
            this.owner = value;
        }
        get Btype() {
            return this.btype;
        }
        set Btype(value) {
            this.btype = value;
        }
        get CCar() {
            return this.ccar;
        }
        set CCar(value) {
            this.ccar = value;
        }
        displayInfo() {
            console.log(`Brand: ${this.brand}`);
            console.log(`Model: ${this.model}`);
            console.log(`Prod. year: ${this.year}`);
            console.log(`VIN: ${this.vin}`);
            console.log(`Registration num: ${this.registrationNumber}`);
            console.log(`Body type: ${this.btype}`);
            console.log(`Car Class: ${this.ccar}`);
            this.owner.printInfo();
        }
    }
    Transport.Car2Class = Car2Class;
    class MotorcycleClass {
        constructor(brand, model, year, vin, registrationNumber, owner, ramtype, issport) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.ramtype = ramtype;
            this.issport = issport;
        }
        get Brand() {
            return this.brand;
        }
        set Brand(value) {
            this.brand = value;
        }
        get Model() {
            return this.model;
        }
        set Model(value) {
            this.model = value;
        }
        get Year() {
            return this.year;
        }
        set Year(value) {
            this.year = value;
        }
        get Vin() {
            return this.vin;
        }
        set Vin(value) {
            this.vin = value;
        }
        get RegistrationNumber() {
            return this.registrationNumber;
        }
        set RegistrationNumber(value) {
            this.registrationNumber = value;
        }
        get Owner() {
            return this.owner;
        }
        set Owner(value) {
            this.owner = value;
        }
        get Ramtype() {
            return this.ramtype;
        }
        set Ramtype(value) {
            this.ramtype = value;
        }
        get IsSport() {
            return this.issport;
        }
        set IsSport(value) {
            this.issport = value;
        }
        displayInfo() {
            console.log(`Brand: ${this.brand}`);
            console.log(`Model: ${this.model}`);
            console.log(`Prod. year: ${this.year}`);
            console.log(`VIN: ${this.vin}`);
            console.log(`Registration num: ${this.registrationNumber}`);
            console.log(`Ram type: ${this.ramtype}`);
            console.log(`Car Class: ${this.issport}`);
            this.owner.printInfo();
        }
    }
    Transport.MotorcycleClass = MotorcycleClass;
    class VehicleStorageClass {
        constructor(vehicles) {
            this.creationDate = new Date();
            this.vehicles = vehicles;
        }
        get CreationDate() {
            return this.creationDate;
        }
        set CreationDate(value) {
            this.creationDate = value;
        }
        get Vehicles() {
            return this.vehicles;
        }
        set Vehicles(value) {
            this.vehicles = value;
        }
        getAllVehicles() {
            return this.vehicles;
        }
    }
    Transport.VehicleStorageClass = VehicleStorageClass;
})(Transport || (exports.Transport = Transport = {}));
;
//# sourceMappingURL=Transport.js.map