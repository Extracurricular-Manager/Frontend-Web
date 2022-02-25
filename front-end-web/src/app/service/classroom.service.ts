import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Classroom } from '../objects/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  

  public classroom=new BehaviorSubject<string>("");
  public currentClassroom=this.classroom.asObservable();


  urlClassroom:string="http://backend:8080/api/classrooms";


  public class=new BehaviorSubject<string>("");
  public currentClass=this.class.asObservable();
 
  constructor(private http:HttpClient) { }

  updateCurrentClassroom(c:string){
    this.classroom.next(c);
  }

  updateCurrentClass(c:string){
    this.class.next(c);
  }


  getAll():Observable<Classroom[]>{
      return this.http.get<Classroom[]>(this.urlClassroom);
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

  patchClassroom(c:Classroom,id:number):Observable<Classroom>{
      return this.http.patch<Classroom>(this.urlClassroom,c);
  }

  deleteClassroom(id:number):Observable<Classroom>{
      return this.http.delete<Classroom>(this.urlClassroom+"/"+id);
  }



}
