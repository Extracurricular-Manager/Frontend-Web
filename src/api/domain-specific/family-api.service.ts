import { Injectable } from '@angular/core';
import {Child} from "../data/child";
import {ApiService} from "../api.service";
import {Adelphie} from "../data/adelphie";

@Injectable({
  providedIn: 'root'
})
export class FamilyApiService {

  protected constructor(private api: ApiService) { }

  root = "/family"

  pushOne(payload:Adelphie){
    return this.api.post(this.root+"/"+payload.id!,payload)
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
