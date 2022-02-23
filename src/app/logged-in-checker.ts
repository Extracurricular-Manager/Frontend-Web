import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import {ApiService} from "./api.service";

@Injectable()
export class LoggedInChecker implements CanActivate {

    constructor(private api: ApiService, private _router: Router) { }

    canActivate(): boolean {
        if (this.api.validSession()) {
            return true;
        } else {
            this._router.navigate(['/login'])
            return false;
        }
    }

}