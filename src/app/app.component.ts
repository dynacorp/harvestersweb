import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    body = [
        {token: 'sjjsjjsjsjsjsjsjsjsjsjsjsjsjsjs'}
    ]
    constructor() {
    }


    ngOnInit() {
        // THIS SHOULD BE REMOVED
        localStorage.setItem('currentUser', JSON.stringify(this.body));
    }
}
