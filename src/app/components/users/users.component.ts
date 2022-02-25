import { Component } from '@angular/core';
import userJson from './exUsers.json';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users:Array<User>=[];

  constructor() {
    this.parseJson(userJson);
  }

  parseJson(json:any){
    this.users=[];

    for(var user of json){
      var usr:User= new User();
      usr.name=user["name"];

      this.users.push(usr);
    }
    
  }


}