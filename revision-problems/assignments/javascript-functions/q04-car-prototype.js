function Car(brand, model) { this.brand = brand; this.model = model; }
Car.prototype.getDetails = function () { return `${this.brand} ${this.model}`; };
const cars = [new Car("Tata", "Nexon"), new Car("Honda", "City")];
cars.forEach((car) => console.log(car.getDetails()));
