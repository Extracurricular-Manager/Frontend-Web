import { Injectable } from '@angular/core';
import {Adelphie} from "../data/adelphie";
import {Child} from "../data/child";
import {ApiService} from "../api.service";
import {GradeLevel} from "../data/grade-level";

@Injectable({
  providedIn: 'root'
})
export class GradeApiService {

  constructor(private api: ApiService) { }

  root = "/grade-levels"

  sendGrade(payload:GradeLevel){
    if(payload.id == -1){
      delete payload.id
      return this.postOne(payload)
    } else {
      return this.patch(payload)
    }
  }

  postOne(payload:GradeLevel){
    return this.api.post<GradeLevel>(this.root,payload)
  }

  patch(payload:GradeLevel){
    return this.api.patch<GradeLevel>(this.root+"/"+payload.id!,payload)
  }

  getOneData(id:number){
    return this.api.get<GradeLevel>(this.root+'/'+id)
  }

/*  getChildren(id:number){
    return this.api.get<Child[]>(this.root+'/'+id+"/children")
  }
 */

  getAll(){
    return this.api.get<GradeLevel[]>(this.root)
  }


}
