export class role{
    id:number=-1;
    name:string="";
    perm:Array<permission>=[];
  }

export class permission{
    id:number=-1;
    name:string="";
}