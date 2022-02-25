import { Child } from "./child";

export class Period{
    id: number;
    serviceId: number;
    name: string;
    timeOfArrival:string;
    timeOfDeparture:string;
    timeOfStartBilling:string;
    child:Child;

    constructor(id: number, serviceId: number, name: string,timeOfArrival:string,
        timeOfDeparture:string,timeOfStartBilling:string,child:Child){
            this.id = id;
            this.serviceId = serviceId;
            this.name = name;
            this.timeOfArrival = timeOfArrival;
            this.timeOfDeparture = timeOfDeparture;
            this.timeOfStartBilling = timeOfStartBilling;
            this.child = child;
        }
}