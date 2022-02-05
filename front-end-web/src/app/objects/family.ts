export class Family {
    id:number;
    postalAdress:string|null;
    referingParentName:string|null;
    referingParentSurname:string|null;
    telephoneNumber:string|null;


    constructor(id:number, postalAdress:string, referingParentName:string, 
        referingParentSurname:string, telephoneNumber:string){
            this.id = id;
            this.postalAdress = postalAdress;
            this.referingParentName = referingParentName;
            this.referingParentSurname = referingParentSurname;
            this.telephoneNumber = telephoneNumber;
        }
}
