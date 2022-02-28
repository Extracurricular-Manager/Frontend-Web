import { Component, ViewEncapsulation } from '@angular/core';
import userJson from './exUsers.json';
import { User } from './user';
import  rolesJson  from '../roles/exRoles.json';
import { role } from '../roles/roles';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent {

  users:Array<User>=[];
  roles:Map<number,role>=new Map();

  //user choisi sur l interface
  selected: User=new User();//on initialise avec un user vide (qui ne sera pas save)

  constructor() {
    this.parseJsons(userJson, rolesJson);
  }

  parseJsons(json:any, jsonRol:any){
    this.roles=new Map();
    for(var rol of jsonRol){
      var roleu:role= new role();
      roleu.name=rol["name"];
      roleu.id=rol["id"];
      //on ne remplit pas le role de ses permissions car pas besoin sur cette vue

      this.roles.set(roleu.id,roleu);
    }


    this.users=[];
    for(var user of json){
      var usr:User= new User();
      usr.name=user["name"];
      usr.id=user["id"];
      usr.roles=[];
      for(var id of user["roles"]){
        var rl=this.roles.get(id);
        if(rl){
          usr.roles.push(rl);
        }
      }

      this.users.push(usr);
    }
  }

  isSelected(id:number):boolean{
    for(var role of this.selected.roles){
      if(id == role.id){
        return true;
      }
    }
    return false;
  }

  getRoles() {
    return Array.from(this.roles.values());
  } 

}