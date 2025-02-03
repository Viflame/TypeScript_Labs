export namespace Transport {
    interface Owner {
        Surname: string;
        Name: string;
        Patronymics: string;
        Birthdate: string;
        DocType: Docs;
        DocSeries: string;
        DocNumber: string;
        printInfo(): void;
    }
    export enum Docs { Pass = "Passport", DriverLicense = "DriverLicense", ID = "IDCard" };
    export class OwnerClass implements Owner {
        private surname: string;
        private name: string;
        private patronymics: string;
        private birthdate: string;
        private docType: Docs;
        private docSeries: string;
        private docNumber: string;

        constructor(surname: string, name: string, patronymics: string, birthdate: string, docType: Docs, docSeries: string, docNumber: string) {
            this.surname = surname;
            this.name = name;
            this.patronymics = patronymics;
            this.birthdate = birthdate;
            this.docType = docType;
            this.docSeries = docSeries;
            this.docNumber = docNumber;
        }
        get Surname(): string {
            return this.surname;
        }
        set Surname(value: string) {
            this.surname = value;
        }
        get Name(): string {
            return this.name;
        }
        set Name(value: string) {
            this.name = value;
        }
        get Patronymics(): string {
            return this.patronymics;
        }
        set Patronymics(value: string) {
            this.patronymics = value;
        }
        get Birthdate(): string {
            return this.birthdate;
        }
        set Birthdate(value: string) {
            this.birthdate = value;
        }
        get DocType(): Docs {
            return this.docType;
        } set DocType(value: Docs) {
            this.docType = value;
        }
        get DocSeries(): string {
            return this.docSeries;
        } set DocSeries(value: string) {
            this.docSeries = value;
        }
        get DocNumber(): string {
            return this.docNumber;
        } set DocNumber(value: string) {
            this.docNumber = value;
        }

        printInfo(): void {
            console.log(`Surname: ${this.surname}`);
            console.log(`Name: ${this.name}`);
            console.log(`Patronymics: ${this.patronymics}`);
            console.log(`Birth date: ${this.birthdate}`);
            console.log(`Doc type: ${this.docType}`);
            console.log(`Doc series: ${this.docSeries}`);
            console.log(`Doc Number: ${this.docNumber}`);
        }
    }
    export interface Vehicle {
        Brand: string;
        Model: string;
        Year: number;
        Vin: string;
        RegistrationNumber: string;
        Owner: OwnerClass;
        displayInfo(): void;
    }
    export class Car implements Vehicle {
        private brand: string;
        private model: string;
        private year: number;
        private vin: string;
        private registrationNumber: string;
        private owner: OwnerClass;

        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: OwnerClass) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }

        get Brand(): string {
            return this.brand;
        }
        set Brand(value: string) {
            this.brand = value;
        }
        get Model(): string {
            return this.model;
        }
        set Model(value: string) {
            this.model = value;
        }
        get Year(): number {
            return this.year;
        }
        set Year(value: number) {
            this.year = value;
        }
        get Vin(): string {
            return this.vin;
        }
        set Vin(value: string) {
            this.vin = value;
        }
        get RegistrationNumber(): string {
            return this.registrationNumber;
        }
        set RegistrationNumber(value: string) {
            this.registrationNumber = value;
        }
        get Owner(): OwnerClass {
            return this.owner;
        }
        set Owner(value: OwnerClass) {
            this.owner = value;
        }

        displayInfo(): void {
            console.log(`Brand: ${this.brand}`);
            console.log(`Model: ${this.model}`);
            console.log(`Prod. year: ${this.year}`);
            console.log(`VIN: ${this.vin}`);
            console.log(`Registration num: ${this.registrationNumber}`);
            this.owner.printInfo();
        }
    }
    export enum BodyType { sedan = "Sedan", coupe = "Coupe", crossover = "Crossover" };
    export enum CarType { Economy = "Economy", Buisiness = "Buisiness", Luxury = "Luxury" };
    interface Car2 extends Vehicle {
        Btype: BodyType;
        CCar: CarType;
    }
    export class Car2Class implements Car2 {
        private brand: string;
        private model: string;
        private year: number;
        private vin: string;
        private registrationNumber: string;
        private owner: OwnerClass;
        private btype;
        private ccar;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: OwnerClass, btype: BodyType, ccar: CarType) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.btype = btype;
            this.ccar = ccar;
        }
        get Brand(): string {
            return this.brand;
        }
        set Brand(value: string) {
            this.brand = value;
        }
        get Model(): string {
            return this.model;
        }
        set Model(value: string) {
            this.model = value;
        }
        get Year(): number {
            return this.year;
        }
        set Year(value: number) {
            this.year = value;
        }
        get Vin(): string {
            return this.vin;
        }
        set Vin(value: string) {
            this.vin = value;
        }
        get RegistrationNumber(): string {
            return this.registrationNumber;
        }
        set RegistrationNumber(value: string) {
            this.registrationNumber = value;
        }
        get Owner(): OwnerClass {
            return this.owner;
        }
        set Owner(value: OwnerClass) {
            this.owner = value;
        }
        get Btype(): BodyType {
            return this.btype;
        }
        set Btype(value: BodyType) {
            this.btype = value;
        }
        get CCar(): CarType {
            return this.ccar;
        }
        set CCar(value: CarType) {
            this.ccar = value;
        }

        displayInfo(): void {
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
    interface Motorcycle extends Vehicle {
        Ramtype: string;
        IsSport: boolean;
    }
    export class MotorcycleClass implements Motorcycle {
        private brand: string;
        private model: string;
        private year: number;
        private vin: string;
        private registrationNumber: string;
        private owner: OwnerClass;
        private ramtype;
        private issport;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: OwnerClass, ramtype: string, issport: boolean) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.ramtype = ramtype;
            this.issport = issport;
        }
        get Brand(): string {
            return this.brand;
        }
        set Brand(value: string) {
            this.brand = value;
        }
        get Model(): string {
            return this.model;
        }
        set Model(value: string) {
            this.model = value;
        }
        get Year(): number {
            return this.year;
        }
        set Year(value: number) {
            this.year = value;
        }
        get Vin(): string {
            return this.vin;
        }
        set Vin(value: string) {
            this.vin = value;
        }
        get RegistrationNumber(): string {
            return this.registrationNumber;
        }
        set RegistrationNumber(value: string) {
            this.registrationNumber = value;
        }
        get Owner(): OwnerClass {
            return this.owner;
        }
        set Owner(value: OwnerClass) {
            this.owner = value;
        }
        get Ramtype(): string {
            return this.ramtype;
        }
        set Ramtype(value: string) {
            this.ramtype = value;
        }
        get IsSport(): boolean {
            return this.issport;
        }
        set IsSport(value: boolean) {
            this.issport = value;
        }
        displayInfo(): void {
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
    interface VehicleStorage<T extends Vehicle> {
        CreationDate: Date;
        Vehicles: T[];
        getAllVehicles(): T[];
    }
    export class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
        private creationDate: Date;
        private vehicles: T[];

        constructor(vehicles: T[]) {
            this.creationDate = new Date();
            this.vehicles = vehicles;
        }

        get CreationDate(): Date {
            return this.creationDate;
        }
        set CreationDate(value: Date) {
            this.creationDate = value;
        }
        get Vehicles(): T[] {
            return this.vehicles;
        }
        set Vehicles(value: T[]) {
            this.vehicles = value;
        }
        getAllVehicles(): T[] {
            return this.vehicles;
        }
    }
};