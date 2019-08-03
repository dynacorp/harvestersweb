import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from '../_models';
import {root_url} from '../const';
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private http: HttpClient) { }

    postForm(data) {
        return this.http.post<any>(`${root_url.apiUrl}post`, data )
            .pipe(map(res => {
                // login successful if there's a jwt token in the response
                if (res) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    alert('success');
                }

                return res;
            }));
    }

    postGiveType(data) {
        return this.http.post<any>(`${root_url.apiUrl}giveType`, data )
            .pipe(map(res => {
                // login successful if there's a jwt token in the response
                if (res) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // alert('success');
                }

                return res;
            }));
    }

    postEvents(data) {
        return this.http.post<any>(`${root_url.apiUrl}event`, data )
            .pipe(map(res => {
                // login successful if there's a jwt token in the response
                if (res) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // alert('success');
                }

                return res;
            }));
    }
}
