import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facturation } from '../objects/facturation';

@Injectable({
  providedIn: 'root'
})
export class FacturationService {

  urlFacturation:string="http://backend:8080/api/facturation/";

  constructor(private http: HttpClient) { }

  getFacturation(id:number):Observable<Facturation>{
    return this.http.get<Facturation>(this.urlFacturation+"/"+id);
  }

  updateFacturation(c:Facturation,id:number):Observable<Facturation>{
    return this.http.put<Facturation>(this.urlFacturation+"/"+id,c);
  }  
  
  deleteFacturation(id:number):Observable<Facturation>{
    return this.http.delete<Facturation>(this.urlFacturation+"/"+id);
  }

  patchFacturation(c:Facturation):Observable<Facturation>{
      return this.http.patch<Facturation>(this.urlFacturation,c);
  }


  getAll():Observable<Facturation[]>{
    return this.http.get<Facturation[]>(this.urlFacturation+"s");
  }

  createFacturation(c:Facturation):Observable<Facturation>{
    return this.http.post<Facturation>(this.urlFacturation+"/create",c);
  }
}
