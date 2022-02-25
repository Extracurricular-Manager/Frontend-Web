import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../objects/role';
import { User } from '../objects/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser:string="http://backend:8080/api/user";

  constructor(private http:HttpClient) { }
  
  putUser(u:User,id:number):Observable<User>{
    return this.http.put<User>(this.urlUser+"/"+id,u);
  }  
  patchUser(u:User,id:number):Observable<User>{
    return this.http.put<User>(this.urlUser+"/"+id,u);
  }  
  createUser(u:User):Observable<User>{
    return this.http.post<User>(this.urlUser+"/create",u);
  }
  patchUserRole(u:User):Observable<User>{
    return this.http.patch<User>(this.urlUser+"/"+u.name+"/",u);
  }
  patchUserResetPassword(u:User):Observable<User>{
    return this.http.patch<User>(this.urlUser+"/"+u.name+"/",u);
  }
  patchUserChangePassword(u:User):Observable<User>{
    return this.http.patch<User>(this.urlUser+"/"+u.name+"/",u);
  }


  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.urlUser+"s");
  }
  getUser(name:string):Observable<User>{
    return this.http.get<User>(this.urlUser+"/"+name);
  }
  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(this.urlUser+"/"+id);
  }

  getRoles(u:User):Observable<Role>{
    return this.http.get<Role>(this.urlUser+"/"+u.name+"/roles");
  }
  deleteRole(u:User,role:string):Observable<Role>{
    return this.http.get<Role>(this.urlUser+"/"+u.name+"/role/"+role);
  }

}
