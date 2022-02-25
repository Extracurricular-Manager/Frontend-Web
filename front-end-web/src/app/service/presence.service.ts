import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presence } from '../objects/presence';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  urlPresence:string="http://backend:8080/api/presence-models/";

  constructor(private http: HttpClient) { }

  getPresence(id:number):Observable<Presence>{
    return this.http.get<Presence>(this.urlPresence+"/"+id);
  }

  updatePresence(c:Presence,id:number):Observable<Presence>{
    return this.http.put<Presence>(this.urlPresence+"/"+id,c);
  }  
  
  deletePresence(id:number):Observable<Presence>{
    return this.http.delete<Presence>(this.urlPresence+"/"+id);
  }

  patchPresence(c:Presence):Observable<Presence>{
      return this.http.patch<Presence>(this.urlPresence,c);
  }


  getAll():Observable<Presence[]>{
    return this.http.get<Presence[]>(this.urlPresence);
  }

  createPresence(c:Presence):Observable<Presence>{
    return this.http.post<Presence>(this.urlPresence+"/create",c);
  }
}
