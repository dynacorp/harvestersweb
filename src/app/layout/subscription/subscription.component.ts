import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.scss'],
    animations: [routerTransition()]
})
export class SubscriptionComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
