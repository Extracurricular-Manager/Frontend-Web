import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permission } from '../objects/permission';
import { Role } from '../objects/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  urlRole:string="http://backend:8080/api/role";

  constructor(private http:HttpClient) { }

  getRole(id:number):Observable<Role>{
    return this.http.get<Role>(this.urlRole+"/"+id);
  }

  updateRole(c:Role,id:number):Observable<Role>{
    return this.http.put<Role>(this.urlRole+"/"+id,c);
  }  
  
  deleteRole(id:number):Observable<Role>{
    return this.http.delete<Role>(this.urlRole+"/"+id);
  }

  getRolePermission(id:number):Observable<Permission>{
    return this.http.get<Permission>(this.urlRole+"/"+id+"/permission");
  }

  patchRolePermission(c:Role,id:number):Observable<Role>{
      return this.http.patch<Role>(this.urlRole+"/"+id+"/permission",c);
  }


  createRole(c:Role):Observable<Role>{
    return this.http.post<Role>(this.urlRole+"/create",c);
  }

  getAll():Observable<Role[]>{
    return this.http.get<Role[]>(this.urlRole+"s");
  }

  deleteRolePermission(idrole:number,idpermission:number):Observable<Permission>{
    return this.http.delete<Permission>(this.urlRole+"/"+idrole+"/permission/"+idpermission);
  }



}
