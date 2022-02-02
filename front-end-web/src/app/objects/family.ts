export class Family {
    id:number;
    postalAdress:string;
    referingParentName:string;
    referingParentSurname:string;
    telephoneNumber:string;


    constructor(id:number, postalAdress:string, referingParentName:string, 
        referingParentSurname:string, telephoneNumber:string){
            this.id = id;
            this.postalAdress = postalAdress;
            this.referingParentName = referingParentName;
            this.referingParentSurname = referingParentSurname;
            this.telephoneNumber = telephoneNumber;
        }
}
