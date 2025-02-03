"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transport_1 = require("./Transport");
const node_inspector_1 = require("node:inspector");
const owner = new Transport_1.Transport.OwnerClass("Ivanov", "Ivan", "Ivanow", "16/08/2005", Transport_1.Transport.Docs.Pass, "0000", "000000");
const car1 = new Transport_1.Transport.Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
owner.printInfo();
car1.displayInfo();
const car2 = new Transport_1.Transport.Car2Class("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner, Transport_1.Transport.BodyType.sedan, Transport_1.Transport.CarType.Buisiness);
const motorcycle = new Transport_1.Transport.MotorcycleClass("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner, "RandomType", true);
const car3 = new Transport_1.Transport.Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
const car4 = new Transport_1.Transport.Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
let vehicles = [car1, car2, car3, car4, motorcycle];
const storage = new Transport_1.Transport.VehicleStorageClass(vehicles);
(0, node_inspector_1.waitForDebugger)();
//# sourceMappingURL=app.js.map