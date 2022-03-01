import { Component, ViewEncapsulation } from '@angular/core';
import userJson from './exUsers.json';
import { User } from './user';
import  rolesJson  from '../roles/exRoles.json';
import { role } from '../roles/roles';
import { MatListOption } from '@angular/material/list';

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
  selUser: User=new User;

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
    for(var role of this.selUser.roles){
      if(id == role.id){
        return true;
      }
    }
    return false;
  }

  getRoles() {
    return Array.from(this.roles.values());
  }

  clickRole(role:role){
    var arr=this.selUser.roles;
    for(var i=0;i<arr.length;i++){
      var actualRole=arr[i];
      if(actualRole.id == role.id){
        //enlever le role
        this.selUser.roles.splice(i,1);
        console.log("enlever :"+role.name);
        console.log(this.selUser.roles);
        return;
      }
    }
    //ajouter le role
    this.selUser.roles.push(role);
    console.log("ajouter :"+role.name);
    console.log(this.selUser.roles);
  }

}