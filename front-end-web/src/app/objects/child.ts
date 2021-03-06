import { Classroom } from "./classroom";
import { Diet } from "./diet";
import { Family } from "./family";
import { GradeLevel } from "./grade-level";

export class Child {
    id:number;
    name:string|null;
    surname:string|null;
    adelphie:Family|null;
    birthday:string|null;
    classroom:Classroom|null;
    diet:Diet|null;
    gradelevel:GradeLevel|null;

    constructor(id:number, name:string, surname:string, adelphie:Family, birthday:string,
        classroom:Classroom, diet:Diet, gradelevel:GradeLevel){
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.adelphie = adelphie;
            this.birthday = birthday;
            this.classroom = classroom;
            this.diet = diet;
            this.gradelevel = gradelevel;
        }
}
