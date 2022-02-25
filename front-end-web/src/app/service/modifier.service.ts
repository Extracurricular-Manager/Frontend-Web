import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modifier } from '../objects/modifer';

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  urlModifier:string="http://backend:8080/api/modifier/";

  constructor(private http: HttpClient) { }

  getModifier(id:number):Observable<Modifier>{
    return this.http.get<Modifier>(this.urlModifier+"/"+id);
  }

  updateModifier(c:Modifier,id:number):Observable<Modifier>{
    return this.http.put<Modifier>(this.urlModifier+"/"+id,c);
  }  
  
  deleteModifier(id:number):Observable<Modifier>{
    return this.http.delete<Modifier>(this.urlModifier+"/"+id);
  }

  patchModifier(c:Modifier):Observable<Modifier>{
      return this.http.patch<Modifier>(this.urlModifier,c);
  }


  getAll():Observable<Modifier[]>{
    return this.http.get<Modifier[]>(this.urlModifier+"s");
  }

  createModifier(c:Modifier):Observable<Modifier>{
    return this.http.post<Modifier>(this.urlModifier+"/create",c);
  }


}
