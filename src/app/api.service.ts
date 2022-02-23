import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private router: Router) { }

  private baseBackendUrl = ""

  saveToken(tok:string){
      const extractedToken = JSON.parse(tok)["id_token"];
      localStorage.setItem("token",extractedToken)
  }

  logoutAndDropToken(){
      this.router.navigate(['/login'])
      localStorage.removeItem("token")
  }

   validSession():boolean{
       const tok = localStorage.getItem("token");
       return tok != null
  }

  login(uname:string, passwd:string, destinationView?:string){
    return this.http.post(
        this.baseBackendUrl+"/api/authenticate",
        {username:uname,password:passwd,rememberMe:true},
        {observe:"response",responseType: 'text'}
    ).subscribe(result=>{
      if(result.body){
        this.saveToken(result.body)
      }
        if (destinationView) {
            this.router.navigate([destinationView])}
        }
    )
  }
}
