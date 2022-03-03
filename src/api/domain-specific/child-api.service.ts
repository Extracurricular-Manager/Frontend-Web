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
    console.log("i'm in")
    if(payload.id == -1){
      console.log("pas d'id on supprime la prop")
      console.log(payload)
      delete payload.id
      console.log(payload)
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
