import { Injectable } from '@angular/core';
import {Child} from "../data/child";
import {Family} from "../data/family";
import {ApiService} from "../api.service";
import {Classroom} from "../data/classroom";

@Injectable({
  providedIn: 'root'
})
export class ClassroomApiService {

  constructor(private api: ApiService) { }

  root = "/classroom"

  pushOne(payload:Classroom){
    return this.api.post(this.root+"/"+payload.id!,payload)
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
