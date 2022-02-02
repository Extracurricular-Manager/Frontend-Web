import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Classroom } from '../objects/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  urlClassroom:string="http://localhost:8080/api/classroom";

  public class=new BehaviorSubject<string>("");
  public currentClass=this.class.asObservable();
 
  constructor(private http:HttpClient) { }

  updateCurrentClass(c:string){
    this.class.next(c);
  }


  getAll():Observable<Classroom[]>{
      return this.http.get<Classroom[]>(this.urlClassroom+"s");
  }

  getClassroom(id:number):Observable<Classroom>{
      return this.http.get<Classroom>(this.urlClassroom+"/"+id);
  }

  createClassroom(c:Classroom):Observable<Classroom>{
      return this.http.post<Classroom>(this.urlClassroom+"/create",c);
  }

  updateClassroom(c:Classroom,id:number):Observable<Classroom>{
      return this.http.put<Classroom>(this.urlClassroom+"/"+id,c);
  }

  partialUpdateClassroom(c:Classroom,id:number):Observable<Classroom>{
      return this.http.patch<Classroom>(this.urlClassroom+"/"+id,c);
  }

  deleteClassroom(id:number):Observable<Classroom>{
      return this.http.delete<Classroom>(this.urlClassroom+"/"+id);
  }



}
