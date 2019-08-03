import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {RequestsService} from '../../services/request/requests.service';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {NotifService} from '../../services/notif.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-tables',
    templateUrl: './give.component.html',
    styleUrls: ['./give.component.scss'],
    animations: [routerTransition()]
})
export class GiveComponent implements OnInit {
    gives: any;
    giveType: FormGroup;
    private submitted = false;
    private loading = false;
    private allgivetypes;

    constructor(
        private formBuilder: FormBuilder,
        private request: RequestsService,
        private post: PostService,
        private notif: NotifService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.allGiveType();

        this.giveType = this.formBuilder.group({
            name: ['', Validators.required],
            purpose: ['', Validators.required],
            description: ['', Validators.required],
            // min_amount: ['', Validators.required],
            fixed_amount: ['', Validators.required],
            allow_anonymous: ['', Validators.required],
            is_active: ['', Validators.required],
        });
    }

    get v() { return this.giveType.controls; }

    allGiveType() {
        this.request.getGiveType()
            .pipe(first())
            .subscribe(
                data => {
                    this.allgivetypes = data;
                },
                error => {
                    this.notif.show({type: 'error', message: error});
                }
            );
    }

    onSubmit() {
        this.submitted = true;
        if (this.giveType.invalid) {
            return;
        }
        this.loading = true;
        this.post.postGiveType(this.giveType.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.notif.show({type: 'success', message: 'Give Type Added Successfully'});
                    this.giveType.reset();
                },
                error => {
                    this.notif.show({type: 'error', message: error});
                }
            );
    }
}
