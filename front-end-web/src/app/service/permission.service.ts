import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permission } from '../objects/permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  urlPermission:string="http://backend:8080/api/permissions";

  constructor(private http: HttpClient) { }

  getAll():Observable<Permission>{
    return this.http.get<Permission>(this.urlPermission);
  }

  updatePermission(name:string):Observable<Permission>{
    return this.http.get<Permission>(this.urlPermission+"/"+name);
  }  
  }
