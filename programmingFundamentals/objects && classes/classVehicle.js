class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: Object.values(parts).join(' '),
            power: Object.values(parts).join(' '),
            quality: (parts.engine * Number(parts.power))
        }
        this.fuel = fuel;
        this.drive = function (num) {
            this.fuel -= num;
        }
    }
}
Vehicle([`bmw`, `3er`,])