import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GradeLevel } from '../objects/grade-level';

@Injectable({
  providedIn: 'root'
})
export class GradeLevelService {

  urlGradeLevel:string="http://localhost:8080/api/grade-level";

  public class=new BehaviorSubject<string>("");
  public currentClass=this.class.asObservable();
 
  constructor(private http:HttpClient) { }

  updateCurrentClass(c:string){
    this.class.next(c);
  }


  getAll():Observable<GradeLevel[]>{
      return this.http.get<GradeLevel[]>(this.urlGradeLevel+"s");
  }

  getGradeLevel(id:number):Observable<GradeLevel>{
      return this.http.get<GradeLevel>(this.urlGradeLevel+"/"+id);
  }

  createGradeLevel(c:GradeLevel):Observable<GradeLevel>{
      return this.http.post<GradeLevel>(this.urlGradeLevel+"/create",c);
  }

  updateGradeLevel(c:GradeLevel,id:number):Observable<GradeLevel>{
      return this.http.put<GradeLevel>(this.urlGradeLevel+"/"+id,c);
  }

  partialUpdateGradeLevel(c:GradeLevel,id:number):Observable<GradeLevel>{
      return this.http.patch<GradeLevel>(this.urlGradeLevel+"/"+id,c);
  }

  deleteGradeLevel(id:number):Observable<GradeLevel>{
      return this.http.delete<GradeLevel>(this.urlGradeLevel+"/"+id);
  }

}
