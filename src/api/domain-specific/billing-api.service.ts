import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import {Facturation} from "../data/facturation";

@Injectable({
  providedIn: 'root'
})
export class BillingApiService {

  constructor(private api: ApiService) { }

  root = "/monthPaid"

/*   exportChildBilling(payload:Facturation){
    return this.api.get<Facturation>(this.root+'/'+id)
  } */

  getOneChildDetailDateData(id:number,ym:string){

    //return this.api.get<Facturation>(this.root+'/child/'+id+'/getDetail?date='+ym+'-01')
    var data :string = this.root+'/child/'+id+"/getDetail?date="+ym+"-01";

    this.api.getRaw(data).subscribe(t=> {
        let bob = new Blob([t.body!],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})
        
        let _blurl = window.URL.createObjectURL(bob)
        window.open(_blurl, "_blank")?.focus()
    })

   /*  //Change this to use your HTTP client
    fetch(data, {this.api.h} ) // FETCH BLOB FROM IT
    .then((response) => response.blob())
    .then((blob) => { // RETRIEVE THE BLOB AND CREATE LOCAL URL
      var _url = window.URL.createObjectURL(blob);
      window.open(_url, "_blank").focus(); // window.open + focus
  }).catch((err) => {
    console.log(err);
  });
    (window as any).open(data,"_blank"); */
  }


}
