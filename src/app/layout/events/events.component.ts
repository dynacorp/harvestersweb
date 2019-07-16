import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    animations: [routerTransition()]
})
export class EventsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
