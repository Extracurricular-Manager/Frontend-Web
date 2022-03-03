import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Child} from "../../../../api/data/child";
import {Adelphie} from "../../../../api/data/adelphie";
import { ClassroomApiService } from 'src/api/domain-specific/classroom-api.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  @Output() chold = new EventEmitter<any>();
  @Input() itemsList : Child[] | Adelphie[] | undefined;
  @Input() value : Child  | Adelphie | undefined;
  @Input() isAdelphie : boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.value = undefined
  }


  displayCorrectName(item : Child | Adelphie){
    let result =  item.hasOwnProperty("name") ? this.getChildName(item) : this.getFamilyReferentName(item)
    //console.log(result)
    return result
  }

  createNewItem(){
    const child: Child = {
      id: -1,
      name: "",
      surname: "",
      birthday: new Date(),
      classroom: {
        id: -1,
        name: "",
        professor: "",
      },
      adelphie: {
        id: -1,
        referingParentName: "",
        referingParentSurname: "",
        telephoneNumber: "",
        postalAdress: "",
      },
      gradeLevel: {
        id:  0,
        level: "",
      },
      presenceModel : [],
      periodModel: [],
      monthPaid: [],
      diets: [],

    };
    const adelph: Adelphie = {
        id:-1,
        referingParentName:"",
        referingParentSurname:"",
        telephoneNumber:"",
        postalAdress:""
    }
    this.chold.emit(this.isAdelphie ? adelph : child);
  }

  getChildName(ch : Child){
    return ch.name + " " + ch.surname
  }


  getFamilyReferentName(f : Adelphie){
    return f.referingParentName  + " " + f.referingParentSurname
  }

}
