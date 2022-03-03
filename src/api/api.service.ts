import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private router: Router) { }

  private baseBackendUrl = "/api"

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
        this.baseBackendUrl+"/authenticate",
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

    standardHeader(){
      return {Authorization:"Bearer " + localStorage.getItem("token")?? ""}
    }

    payloadHeader(){
      return {Authorization:"Bearer " + localStorage.getItem("token")?? "","Content-Type": "application/json"}
    }



    get<T>(url:string){
      return this.http.get(this.baseBackendUrl + url,{headers:this.standardHeader(), observe:"response",responseType: 'json'})
    }

    post(url:string,payload:any){
        console.log(this.payloadHeader())
        return this.http.post(this.baseBackendUrl + url,payload,{headers:this.payloadHeader(), observe:"response",responseType: 'json'})
    }

    put(url:string,payload:any){
        console.log(this.payloadHeader())
        return this.http.put(this.baseBackendUrl + url,payload,{headers:this.payloadHeader(), observe:"response",responseType: 'json'})
    }

    patch(url:string,payload:any){
        console.log(this.payloadHeader())
        return this.http.patch(this.baseBackendUrl + url,payload,{headers:this.payloadHeader(), observe:"response",responseType: 'json'})
    }

    delete(url:string){
        return this.http.patch(this.baseBackendUrl + url,{headers:this.standardHeader(), observe:"response",responseType: 'json'})
    }
}
