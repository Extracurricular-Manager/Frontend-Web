import { Injectable } from '@angular/core';
import {Child} from "../data/child";
import {ApiService} from "../api.service";
import {Family} from "../data/family";

@Injectable({
  providedIn: 'root'
})
export class FamilyApiService {

  protected constructor(private api: ApiService) { }

  root = "/family"

  pushOne(payload:Child){
    return this.api.post(this.root+"/"+payload.id!,payload)
  }

  getOneData(id:number){
    return this.api.get<Family>(this.root+'/'+id)
  }

  getChildren(id:number){
    return this.api.get<Child[]>(this.root+'/'+id+"/children")
  }

  getAll(){
    return this.api.get<Family[]>("/famillies")
  }

}
