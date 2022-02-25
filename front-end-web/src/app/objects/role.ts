import { Permission } from "./permission";

export class Role{
    name:string;
    permissions:Permission;

    constructor(name:string,permissions:Permission){
        this.name = name;
        this.permissions = permissions;
    }
}