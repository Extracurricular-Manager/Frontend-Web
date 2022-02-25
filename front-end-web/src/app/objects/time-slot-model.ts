import { Child } from "./child";

export class TimeSlotModel{
    id:number;
    name:string;
    timeOfArrival:string;
    timeOfDeparture:string;
    child:Child;

    constructor(id:number, name:string, timeOfArrival:string, timeOfDeparture:string, child:Child){
        this.id = id;
        this.name = name;
        this.timeOfArrival = timeOfArrival;
        this.timeOfDeparture = timeOfDeparture;
        this.child = child;
    }
}