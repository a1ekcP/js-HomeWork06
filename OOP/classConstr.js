class Auto{
    constructor(name, model, yaer, vin){
        this.name = name;
        this.model = model;
        this.yaer = yaer;
        this.vin = vin;
    }
    log(){
        return `${this.name} ${this.model}, ${this.year}`
    }
    checkVin(){
        return this.vin === 16 ? true : false;
    }
}
class Auto_Fuel extends Auto{
    constructor(name, model, yaer, vin, volume, consum){
        super(name, model, yaer, vin, volume, consum);
        this.name = name;
        this.model = model;
        this.yaer = yaer;
        this.vin = vin;
        this.volume = volume;
        this.consum = consum;
    }
    showFuelConsumption(){
        return `Обьем: ${this.volume}, Расход: ${this.consum}`;
    }
}
class Auto_Electric extends Auto{
    constructor(name, model, year, vin,battery){
        super(name, model, yaer, vin, battery)
        this.name = name;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.battery = battery;
    }
    showBatteryConfig(){
        return this.battery;
    }
}