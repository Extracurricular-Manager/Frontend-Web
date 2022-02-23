import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private baseBackendUrl = "http://"

  saveToken(tok:Object){

  }

  login(uname:string, passwd:string){
    return this.http.post(
        this.baseBackendUrl+"/api/authenticate",
        {username:uname,password:passwd},
        {observe:"response",responseType: 'json'}
    ).subscribe(result=>{
      if(result.body){
        //this.saveToken(JSON.parse(result.body.id_))
      }

    })
  }
}
