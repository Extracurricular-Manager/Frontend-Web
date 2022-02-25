import { Model } from "./model";

export class Metadata{
    id: number;
    
    nameOfSchool:string;
    version:string;
    
    constructor(id:number, nameOfSchool:string, version:string){
        this.id = id;
        this.nameOfSchool = nameOfSchool;
        this.version = version;

    }
}