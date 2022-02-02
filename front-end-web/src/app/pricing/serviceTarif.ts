export class serviceTarif{
    name:string="";
    criteres:Array<critere>=[];
}



export class critere{
    name:string="";
    inputs: Array<inputTarif>=[];
}


export class inputTarif{
    name:string="";
    type:string="";
    value:string="";//valeur actuelle
}