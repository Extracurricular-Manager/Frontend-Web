/* import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Service } from '../data/service';

@Injectable({
  providedIn: 'root'
})
export class ModuleApiService {

  constructor(private api: ApiService) { }

  root = "/service"

  getOneData(id:number){
    return this.api.get<Service>(this.root+'/'+id)
  }

} */
