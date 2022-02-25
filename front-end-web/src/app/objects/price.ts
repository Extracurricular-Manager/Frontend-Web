export class Price{
    id: number;
    price: number;
    name: string;
    comment:string;

    constructor(id: number, price: number, name: string,comment:string){
        this.id = id;
        this.price = price;
        this.name = name;
        this.comment = comment;
    }
}