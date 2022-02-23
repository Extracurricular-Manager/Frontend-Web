import { Component, AfterViewInit } from '@angular/core';
import { critere, inputTarif, serviceTarif } from './serviceTarif';
import SampleJson from './criteres_tarification.json';

@Component({
  selector: 'app-pricing-view',
  templateUrl: './pricing-view.component.html',
  styleUrls: ['./pricing-view.component.scss']
})
export class PricingViewComponent implements AfterViewInit {

  tarifServ:Array<serviceTarif>=[];

  constructor() {
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

  
  //create a json with given data and sent it
  sendJSON(){
  var json:Array<Object>=[];

    for(var service of this.tarifServ){//Pour chaque service
      var serv={name:service.name,criteres:<any>[]};

      for(var crit of service.criteres){//Pour chaque critere
        var critare={name:crit.name,inputs:<any>[]};

        for(var inp of crit.inputs){//Pour chaque input
          var input={name:inp.name,value:inp.value};//On renseigne juste le name et la value

          critare.inputs.push(input);
        }

        serv.criteres.push(critare);
      }
      
      json.push(serv);
    }

    console.log(JSON.stringify(json));
  }


  getFontSize(lgth:number):number{
    var res:number=(1.2/Math.pow(lgth/6,0.15))
    return res;
  }

}
