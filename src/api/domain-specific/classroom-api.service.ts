import { Injectable } from '@angular/core';
import {Child} from "../data/child";
import {Adelphie} from "../data/adelphie";
import {ApiService} from "../api.service";
import {Classroom} from "../data/classroom";
import {BaseApiService} from "./BaseApiService";

@Injectable({
  providedIn: 'root'
})
export class ClassroomApiService implements BaseApiService{

  constructor(private api: ApiService) { }

  root = "/classroom"

  sendClassroom(payload:Classroom){
    if(payload.id == -1){
      delete payload.id
      return this.postOne(payload)
    } else {
      return this.patch(payload)
    }
  }

  patch(payload:Classroom ){
    return this.api.patch<Classroom>(this.root+'/'+payload.id!,payload)
  }

  postOne(payload:Classroom){
    return this.api.post(this.root,payload)
  }

  getOneData(id:number){
    return this.api.get<Classroom>(this.root+'/'+id)
  }

  getChildren(id:number){
    return this.api.get<Child[]>(this.root+'/'+id+"/children")
  }

  getAll(){
    return this.api.get<Classroom[]>(this.root+"s")
  }
}
