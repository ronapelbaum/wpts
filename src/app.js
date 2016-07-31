var Logger = require('./logger/Logger').Logger;
var logger = new Logger();
logger.log('app loaded');

document.write('welcome to my app 2');

var Car = require('./Car.ts').Car;
var tmpCar = new Car('blue');
tmpCar.drive();


logger.log('end');