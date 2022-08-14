function Auto(name, model, year, vin){
    this.name = name;
    this.model = model;
    this.year = year;
    this.vin = vin;
}
Auto.prototype.log = function(){
    return `${this.name} ${this.model}, ${this.year}`;
}
Auto.prototype.checkVin = function(){
    return this.vin.length === 16 ? true : false;
}


function Auto_Fuel(name, model, year, vin, volume, consum){
    this.name = name;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.volume = volume;
    this.consum = consum
}
Auto_Fuel.prototype = Object.create(Auto.prototype);
Auto_Fuel.prototype.showFuelConsumption = function(){
    return `Обьем: ${this.volume}, Расход: ${this.consum}`;
}

function Auto_Electric(name, model, year, vin, battery){
    this.name = name;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.battery = battery
}
Auto_Electric.prototype = Object.create(Auto.prototype);
Auto_Electric.prototype.showBatteryConfig = function(){
    return this.battery;
}