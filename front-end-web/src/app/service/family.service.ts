import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Child } from '../objects/child';
import { Family } from '../objects/family';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  urlFamily:string="http://nackend:8080/api/family";

  public class=new BehaviorSubject<string>("");
  public currentClass=this.class.asObservable();
 
  constructor(private http:HttpClient) { }

  updateCurrentClass(c:string){
    this.class.next(c);
  }


  getAll():Observable<Family[]>{
      return this.http.get<Family[]>(this.urlFamily.substring(0, this.urlFamily.length-1)+"ies");
  }

  getChildrenOfFamily(id:number):Observable<Child[]>{
    return this.http.get<Child[]>(this.urlFamily+"/"+id+"/children");
  }

  getFamily(id:number):Observable<Family>{
      return this.http.get<Family>(this.urlFamily+"/"+id);
  }

  createFamily(c:Family):Observable<Family>{
      return this.http.post<Family>(this.urlFamily,c);
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
