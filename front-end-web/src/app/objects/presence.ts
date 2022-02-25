import { Child } from "./child";

export class Presence{
    id: number;
    name: string;
    presence: boolean;
    date:string;
    child:Child;

    constructor(id: number, name: string, presence: boolean, date:string, child:Child){
        this.id = id;
        this.name = name;
        this.presence = presence;
        this.date = date;
        this.child = child;
    }
}