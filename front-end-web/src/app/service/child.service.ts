import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Child } from '../objects/child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  public child=new BehaviorSubject<number>(0);
  public currentChild=this.child.asObservable();

  updateCurrentChildId(c:number){
      this.child.next(c);
  }
  

  urlChild:string="http://backend:8080/api/children";

  constructor(private http: HttpClient){}


  getChild(id:number):Observable<Child>{
    return this.http.get<Child>(this.urlChild+"/"+id);
  }

  updateChild(c:Child,id:number):Observable<Child>{
    return this.http.put<Child>(this.urlChild+"/"+id,c);
  }  
  
  deleteChild(id:number):Observable<Child>{
    return this.http.delete<Child>(this.urlChild+"/"+id);
  }

  patchChild(c:Child):Observable<Child>{
      return this.http.patch<Child>(this.urlChild,c);
  }


  getAll():Observable<Child[]>{
    return this.http.get<Child[]>(this.urlChild);
  }

  createChild(c:Child):Observable<Child>{
    return this.http.post<Child>(this.urlChild+"/create",c);
  }

}
