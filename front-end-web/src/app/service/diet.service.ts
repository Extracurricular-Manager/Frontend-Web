import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Diet } from '../objects/diet';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  urlDiet:string="http://backend:8080/api/diets";

  public class=new BehaviorSubject<string>("");
  public currentClass=this.class.asObservable();
 
  constructor(private http:HttpClient) { }

  updateCurrentClass(c:string){
    this.class.next(c);
  }


  getAll():Observable<Diet[]>{
      return this.http.get<Diet[]>(this.urlDiet);
  }

  getDiet(id:number):Observable<Diet>{
      return this.http.get<Diet>(this.urlDiet+"/"+id);
  }

  createDiet(c:Diet):Observable<Diet>{
      return this.http.post<Diet>(this.urlDiet,c);
  }

  updateDiet(c:Diet,id:number):Observable<Diet>{
      return this.http.put<Diet>(this.urlDiet+"/"+id,c);
  }

  partialUpdateDiet(c:Diet,id:number):Observable<Diet>{
      return this.http.patch<Diet>(this.urlDiet+"/"+id,c);
  }

  deleteDiet(id:number):Observable<Diet>{
      return this.http.delete<Diet>(this.urlDiet+"/"+id);
  }

}
