import { Component } from '@angular/core';
import userJson from './exUsers.json';
import { User } from './user';
import  Perm  from '../roles/exRoles.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users:Array<User>=[];

  //user choisi sur l interface
  selected: User=new User();//on initialise avec un user vide (qui ne sera pas save)

  constructor() {
    this.parseJsons(userJson, Perm);
  }

  parseJsons(json:any, perm:any){
    this.users=[];

    for(var user of json){
      var usr:User= new User();
      usr.name=user["name"];
      usr.id=user["id"];
      this.users.push(usr);
    }
    
  }


}