import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services";
import {root_url} from "../const";
import {Router} from "@angular/router";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        let url = this.router.url;
        if (url !== '/login' && currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                    'x-api-key': `${root_url.xapikey}`,
                    'Content-Type': `multipart/form-data`
                }
            });
        } else {
            request = request.clone({
                setHeaders: {
                    'x-api-key': `${root_url.xapikey}`
                }
            });
        }

        return next.handle(request);
    }
}
