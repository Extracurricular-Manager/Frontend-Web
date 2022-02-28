import { role } from "../roles/roles";

export class User{
    id:number=-1;
    name:string="";
    roles:Array<role>=[];
}