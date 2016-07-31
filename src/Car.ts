// import Logger from "./logger/Logger";
import {Logger} from "./logger/Logger";
// import * as logger from "./logger/Logger";
export class Car {
    private color;
    constructor(color:string) {
        this.color = color;
    }

    drive() {
        var tmp = new Logger();
        tmp.log('I\'m driving with a '+this.color+' car!');
    }
}