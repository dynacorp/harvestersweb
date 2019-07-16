import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from "../_models";
import {root_url} from "../const";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getPost() {
        return this.http.get(`${root_url.apiUrl}/posts`);
    }

    getById(id: number) {
        return this.http.get(`${root_url.apiUrl}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${root_url.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${root_url.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${root_url.apiUrl}/users/${id}`);
    }
}
