import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { critere, inputTarif, serviceTarif } from './serviceTarif';
import SampleJson from '../../../../examples/criteres_tarification.json';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements AfterViewInit {

  tarifServ:Array<serviceTarif>=[];


  constructor() {
    //console.log(SampleJson);
    this.parseJSON(SampleJson);
  }



  ngAfterViewInit(){
  }

  parseJSON(json:any):void{
    this.tarifServ=[];

    for(var service of json){
      var serv:serviceTarif=new serviceTarif();
      serv.name=service["name"];
      for(var crit of service["criteres"]){
        var cri=new critere();
        cri.name=crit["name"];
        for(var input of crit["inputs"]){
          var inp=new inputTarif();
          inp.name=input["name"];

          //TYPE
          if(typeof(input["type"]) == "string"){
            switch(input["type"]){
              case "int":
                inp.type="number";break;
              case "float":
                inp.step="any";
                inp.type="number";break;

              case "heure":
              case "time":
                inp.type="time";break;

              default:
                inp.type="number";break;
            }
          }else{//type est une liste de valeur possible
            inp.type="list";
            inp.valPos=input["type"];
            console.log(inp.valPos);
          }
          //TYPE

          inp.value=input["value"];
          cri.inputs.push(inp);
        }
        serv.criteres.push(cri);
      }

      this.tarifServ.push(serv);
    }
  }

  resetInput(e:Event){
    if(e.target){
      var input:HTMLInputElement=<HTMLInputElement>e.target;//cast
      if(input!=null){
        input.setAttribute("lastVal",input.value);
        input.value="";
      }
    }
  }

  unfocusInput(e:Event){
    if(e.target){
      var input:HTMLInputElement=<HTMLInputElement>e.target;//cast
      if(input!=null){
        var v=input.getAttribute("lastVal");
        if(input.value=="" && v!=null){
          input.value=v;
        }
      }
    }
  }

  coucou(){
    alert("coucou");
  }

  sendJSON(){
    for(var service of this.tarifServ){

    }
  }

  getFontSize(lgth:number):number{
    var res:number=(1.2/Math.pow(lgth/6,0.15))
    return res;
  }
}
