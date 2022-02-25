import { NumberInput } from "@angular/cdk/coercion";

export class Facturation{
    id:number;
    schoolService:string;
    cost:number;
    payed:boolean;

    constructor(id:number, schoolService:string, cost:number, payed:boolean) {
        this.id = id;
        this.schoolService = schoolService;
        this.cost = cost;
        this.payed = payed;
    }
}