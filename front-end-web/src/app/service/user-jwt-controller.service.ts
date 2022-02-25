import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserJwt } from '../objects/user-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserJwtControllerService {

  userJwtUrl: string="http://backend:8080/api/authentificate"

  constructor(private http:HttpClient) { }

  authenticate(u:UserJwt){
    return this.http.post<UserJwt>(this.userJwtUrl,u);
  }
}
