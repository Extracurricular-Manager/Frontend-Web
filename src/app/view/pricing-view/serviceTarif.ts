export class serviceTarif{
    name:string="";
    criteres:Array<critere>=[];
}


export class critere{
    name:string="";
    inputs: Array<inputTarif>=[];
}


export class inputTarif{
    name:string="";//description of this elem (ex: price)
    
    type:string="";//type of input element
    realType:string="";//real type of this value
    step:string="default";

    valPos:Array<any>=[];
    value:string="";//valeur actuelle
}