import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Child} from "../data/child";
import {BaseApiService} from "./BaseApiService";

@Injectable({
  providedIn: 'root'
})
export class ChildApiService implements BaseApiService {

  protected constructor(private api: ApiService) { }

  root = "/child"

   rootAll = "/children"

  sendChild(payload:Child){
    // @ts-ignore
    if(!(payload.birthday! instanceof String))
      { // @ts-ignore
        payload.birthday = payload.birthday.toISOString().split("T")[0]
      }
    console.log(payload)
    if(payload.id == -1){
      delete payload.id
      return this.postOne(payload)
    } else {
      return this.patch(payload)
    }
  }

  patch(payload:Child){
    return this.api.patch(this.root+"/"+payload.id!,payload)
  }

  postOne(payload:Child){
    return this.api.post(this.root,payload)
  }

  getOneData(id:number){
    return this.api.get<Child>(this.root+'/'+id)
  }

  getAll(){
    return this.api.get<Child[]>(this.rootAll)
  }

}
