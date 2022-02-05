export class Classroom {
    id:number;
    name:string|null;
    professor:string|null;

    constructor(id:number, name:string, professor:string){
        this.id = id;
        this.name = name;
        this.professor = professor;
    }
}
