import {ApiService} from "../api.service";
import {Child} from "../data/child";
import {HttpResponse} from "@angular/common/http";

export interface BaseApiService {

    root  :string

    postOne(payload:any):any

    getOneData(id:number):any

    getAll():any

}