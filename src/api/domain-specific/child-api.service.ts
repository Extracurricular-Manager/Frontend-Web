import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Child} from "../data/child";

@Injectable({
  providedIn: 'root'
})
export class ChildApiService {

  protected constructor(private api: ApiService) { }

   root = "/children"

  pushOne(payload:Child){
    return this.api.post(this.root+"/"+payload.id!,payload)
  }

  getOneData(id:number){
    return this.api.get<Child>(this.root+'/'+id)
  }

  getAll(){
    return this.api.get<Child[]>(this.root)
  }

}
