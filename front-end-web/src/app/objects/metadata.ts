import { Model } from "./model";

export class Metadata{
    id: number;
    module:string;
    endPoint:string;
    model:Model;

    constructor(id: number, module:string, endPoint:string,model:Model){
        this.id = id;
        this.module = module;
        this.endPoint = endPoint;
        this.model = model;
    }
}