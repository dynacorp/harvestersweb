import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {root_url} from "../../const";

const ROOT_URL = 'https://x-church-api.herokuapp.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }
  login() {
      // this.http.post(ROOT_URL + 'auth/login', {data: data}).subscribe()
  }

  getPost() {
      return this.http.get(`${root_url.apiUrl}posts`);
  }

    getComments() {
        return this.http.get(`${root_url.apiUrl}comments`);
    }

    getTestimonies() {
        return this.http.get(`${root_url.apiUrl}testimonies`);
    }

    getBooks() {
        return this.http.get(`${root_url.apiUrl}books`);
    }

    getAudios() {
        return this.http.get(`${root_url.apiUrl}audio`);
    }

    getVideos() {
        return this.http.get(`${root_url.apiUrl}videos`);
    }

    getEvents() {
        return this.http.get(`${root_url.apiUrl}events`);
    }

    getGives() {
        return this.http.get(`${root_url.apiUrl}gives`);
    }

    getGiveType() {
        return this.http.get(`${root_url.apiUrl}giveType`);
    }
}
