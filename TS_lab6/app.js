"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Car = class Car {
    constructor(b, m) {
        this.brand = b;
        this.model = m;
    }
    getInformation() {
        return "�����: " + this.brand + "; ������: " + this.model;
    }
};
__decorate([
    toUpperCase
], Car.prototype, "getInformation", null);
Car = __decorate([
    sealed
], Car);
function toUpperCase(method) {
    return function (...args) {
        const result = method.apply(this, args);
        return result.toUpperCase();
    };
}
function sealed(target) {
    Object.seal(target);
    Object.seal(target.prototype);
}
const car = new Car("TestBrand", "TestModel");
console.log(car.getInformation());
Object.defineProperty(Car.prototype, "year", { value: 2000 });
//# sourceMappingURL=app.js.map