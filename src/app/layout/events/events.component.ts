import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestsService} from "../../services/request/requests.service";
import {PostService} from "../../services/post.service";
import {NotifService} from '../../services/notif.service';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    animations: [routerTransition()]
})
export class EventsComponent implements OnInit {
    eventForm: FormGroup;
    ministers2: FormGroup;
    private submitted = false;
    private loading = false;
    private actives1: FormGroup;
    private events;

    constructor(
        private formBuilder: FormBuilder,
        private request: RequestsService,
        private post: PostService,
        private notif: NotifService,
        ) {}

    ngOnInit() {
        this.actives1 = this.formBuilder.group({
            activities2: '',
        });
        this.eventForm = this.formBuilder.group({
            title: ['', Validators.required],
            venue: ['', Validators.required],
            end_date: ['', Validators.required],
            start_date: ['', Validators.required],
            pin_to_top: ['', Validators.required],
            prioritize: ['', Validators.required],
            activities: ['', null],
            thumbnail: ['', Validators.required],
            ministers: this.formBuilder.array([ this.players ]),
            description: ['', Validators.required],
        });

        this.request.getEvents()
            .pipe(first())
            .subscribe(
                data => {
                    this.events = data;
                },
                error => {
                    this.notif.show({type: 'error', message: error.message});
                }
            );
    }

    formData() {
        this.eventForm.get('activities').clearValidators();
        this.eventForm.get('activities').updateValueAndValidity();
        this.eventForm.get('activities').setValue(this.players2.value);
    }

    get players(): FormGroup {
        return this.ministers2 = this.formBuilder.group({
            name: ['', Validators.required],
            title: ['', Validators.required],
            image: ['', Validators.required]
        });
    }

    get players2() {
        console.log(this.actives1.controls.activities2.value);
        const c = this.actives1.controls.activities2.value;
        if (c.includes(',')) {
            console.log(c.split(','));
            const k = c.split(',');
            return this.formBuilder.array([ [k, Validators.nullValidator(null)] ]);
        } else {
            return this.formBuilder.array([ c ]);
        }
    }

    get v() { return this.eventForm.controls; }
    get x() { return this.ministers2.controls; }
    get z() { return this.actives1.controls; }

    onSubmit() {
        console.log('checking');
        this.submitted = true;
        if (this.eventForm.invalid) {
            console.log(this.eventForm);
            return;
        }
        console.log(this.eventForm);
        this.loading = true;
        this.post.postEvents(this.eventForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.notif.show({type: 'success', message: 'post added successfully'});
                    this.eventForm.reset();
                },
                error => {
                    this.notif.show({type: 'error', message: error.message});
                }
            );
    }
}
