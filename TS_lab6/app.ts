@sealed
class Car {
    brand: string;
    model: string;

    constructor(b: string, m: string) {
        this.brand = b;
        this.model = m;
    }

    @toUpperCase
    getInformation(): string {
        return "Брэнд: " + this.brand + "; Модель: " + this.model;
    }
}

function toUpperCase(method: Function) {
    return function (this: any, ...args: any[]) {
        const result = method.apply(this, args);
        return result.toUpperCase();
    }
}

function sealed(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype);
}

const car = new Car("TestBrand", "TestModel");
console.log(car.getInformation());

Object.defineProperty(Car.prototype, "year", { value: 2000 });