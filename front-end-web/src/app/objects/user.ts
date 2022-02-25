import { Role } from "./role";

export class User{
    id:number;
    name:string;
    login:string;
    roles:Role;
    activated:boolean;

    constructor(id:number, name:string, login:string, roles:Role,activated:boolean) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.roles = roles;
        this.activated = activated;
    }
}