import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  constructor(private api: ApiService) { }

  uname = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

  loginAction(){
    this.api.login(this.uname.value,this.password.value)
  }

}
