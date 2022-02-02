import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Family } from '../objects/family';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  urlFamily:string="http://localhost:8080/api/family";

  public class=new BehaviorSubject<string>("");
  public currentClass=this.class.asObservable();
 
  constructor(private http:HttpClient) { }

  updateCurrentClass(c:string){
    this.class.next(c);
  }


  getAll():Observable<Family[]>{
      return this.http.get<Family[]>(this.urlFamily+"ren");
  }

  getFamily(id:number):Observable<Family>{
      return this.http.get<Family>(this.urlFamily+"/"+id);
  }

  createFamily(c:Family):Observable<Family>{
      return this.http.post<Family>(this.urlFamily+"/create",c);
  }

  updateFamily(c:Family,id:number):Observable<Family>{
      return this.http.put<Family>(this.urlFamily+"/"+id,c);
  }

  partialUpdateFamily(c:Family,id:number):Observable<Family>{
      return this.http.patch<Family>(this.urlFamily+"/"+id,c);
  }

  deleteFamily(id:number):Observable<Family>{
      return this.http.delete<Family>(this.urlFamily+"/"+id);
  }

}
