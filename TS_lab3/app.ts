//Task1
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

enum Docs { Pass = "Passport", DriverLicense = "DriverLicense", ID = "IDCard" };

class OwnerClass implements Owner {
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
        console.log(`Фамилия: ${this.surname}`);
        console.log(`Имя: ${this.name}`);
        console.log(`Отчество: ${this.patronymics}`);
        console.log(`Дата рождения: ${this.birthdate}`);
        console.log(`Тип документа: ${this.docType}`);
        console.log(`Серия документа: ${this.docSeries}`);
        console.log(`Номер документа: ${this.docNumber}`);
    }
}

interface Vehicle {
    Brand: string;
    Model: string;
    Year: number;
    Vin: string;
    RegistrationNumber: string;
    Owner: OwnerClass;
    displayInfo(): void;
}

 class Car implements Vehicle {
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
         console.log(`Марка: ${this.brand}`);
         console.log(`Модель: ${this.model}`);
         console.log(`Год выпуска: ${this.year}`);
         console.log(`VIN-номер: ${this.vin}`);
         console.log(`Регистрационный номер: ${this.registrationNumber}`);
         owner.printInfo();
     }
}

const owner = new OwnerClass("Иванов", "Иван", "Иванов", "16/08/2005", Docs.Pass, "0000", "000000");
const car1 = new Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
owner.printInfo();
car1.displayInfo();



//task2
enum BodyType {sedan = "Седан", coupe = "Купе", crossover = "Кроссовер" };
enum CarType {Economy = "Эконом", Buisiness = "Бизнес", Luxury = "Люкс"};
interface Car2 extends Vehicle {
    Btype: BodyType;
    CCar: CarType;
}
class Car2Class implements Car2 {
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
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
        console.log(`Кузов: ${this.btype}`);
        console.log(`Класс Автомобиля: ${this.ccar}`);
        owner.printInfo();
    }
}

interface Motorcycle extends Vehicle {
    Ramtype: string;
    IsSport: boolean;
}
class MotorcycleClass implements Motorcycle {
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
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
        console.log(`Кузов: ${this.ramtype}`);
        console.log(`Класс Автомобиля: ${this.issport}`);
        owner.printInfo();
    }
    
}
const car2 = new Car2Class("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner, BodyType.sedan, CarType.Buisiness);
const motorcycle = new MotorcycleClass("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner, "RandomType", true);

//task3
interface VehicleStorage<T extends Vehicle> {
    CreationDate: Date; 
    Vehicles: T[]; 
    getAllVehicles(): T[]; 
}
class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
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
const car3 = new Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
const car4 = new Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
let vehicles: Vehicle[] = [car1, car2, car3, car4, motorcycle];
const storage = new VehicleStorageClass<Vehicle>(vehicles);
