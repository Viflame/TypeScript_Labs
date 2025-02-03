import { Transport } from "./Transport";
import { waitForDebugger } from "node:inspector";

const owner = new Transport.OwnerClass("Ivanov", "Ivan", "Ivanow", "16/08/2005", Transport.Docs.Pass, "0000", "000000");
const car1 = new Transport.Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
owner.printInfo();
car1.displayInfo();

const car2 = new Transport.Car2Class("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner, Transport.BodyType.sedan, Transport.CarType.Buisiness);
const motorcycle = new Transport.MotorcycleClass("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner, "RandomType", true);

const car3 = new Transport.Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
const car4 = new Transport.Car("randomMobile", "randomModel", 2000, "randomVin", "randomReg", owner);
let vehicles: Transport.Vehicle[] = [car1, car2, car3, car4, motorcycle];
const storage = new Transport.VehicleStorageClass<Transport.Vehicle>(vehicles);

waitForDebugger();