import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {RequestsService} from '../../services/request/requests.service';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-tables',
    templateUrl: './give.component.html',
    styleUrls: ['./give.component.scss'],
    animations: [routerTransition()]
})
export class GiveComponent implements OnInit {
    gives: any;

    constructor(private request: RequestsService) {}

    ngOnInit() {
        // this.request.getGives()
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.gives = data;
        //         },
        //         error => {
        //
        //         }
        //     );
    }
}
