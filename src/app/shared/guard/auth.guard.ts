import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../services";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: AuthenticationService) {}

    canActivate() {
        let currentUser = this.authenticationService.currentUserValue;
        let url = this.router.url;
        if (currentUser && currentUser.token) {
            return true;
        }

        this.router.navigate(['/dashboard']);
        return false;
    }
}
