import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {RequestsService} from "../../services/request/requests.service";
import {first} from "rxjs/operators";

@Component({
    selector: 'app-bs-element',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    animations: [routerTransition()]
})
export class CommentsComponent implements OnInit {
    comments: any;

    constructor(private request: RequestsService) {}

    ngOnInit() {
        this.request.getComments()
            .pipe(first())
            .subscribe(
                data => {
                    this.comments = data;
                },
                error => {

                }
            );
    }
}
