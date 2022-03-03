import { Injectable } from '@angular/core';
import {Child} from "../data/child";
import {ApiService} from "../api.service";
import {Adelphie} from "../data/adelphie";
import {BaseApiService} from "./BaseApiService";

@Injectable({
  providedIn: 'root'
})
export class FamilyApiService implements BaseApiService {

  protected constructor(private api: ApiService) { }

  root = "/family"

  sendFamily(payload:Adelphie){
    if(payload.id == -1){
      delete payload.id
      return this.postOne(payload)
    } else {
      return this.patch(payload)
    }
  }

  postOne(payload:Adelphie){
    return this.api.post<Adelphie>(this.root,payload)
  }

  patch(payload:Adelphie){
    return this.api.patch<Adelphie>(this.root+"/"+payload.id!,payload)
  }

  getOneData(id:number){
    return this.api.get<Adelphie>(this.root+'/'+id)
  }

  getChildren(id:number){
    return this.api.get<Child[]>(this.root+'/'+id+"/children")
  }

  getAll(){
    return this.api.get<Adelphie[]>("/families")
  }

}
