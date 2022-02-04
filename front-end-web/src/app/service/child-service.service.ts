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
  

  urlChild:string="http://localhost:8080/api/child";

  constructor(private http: HttpClient){}

  getAll():Observable<Child[]>{
      return this.http.get<Child[]>(this.urlChild+"ren");
  }

  getChild(id:number):Observable<Child>{
      return this.http.get<Child>(this.urlChild+"/"+id);
  }

  createChild(c:Child):Observable<Child>{
      return this.http.post<Child>(this.urlChild+"/create",c);
  }

  updateChild(c:Child,id:number):Observable<Child>{
      return this.http.put<Child>(this.urlChild+"/"+id,c);
  }

  partialUpdateChild(c:Child,id:number):Observable<Child>{
      return this.http.patch<Child>(this.urlChild+"/"+id,c);
  }

  deleteChild(id:number):Observable<Child>{
      return this.http.delete<Child>(this.urlChild+"/"+id);
  }
}
