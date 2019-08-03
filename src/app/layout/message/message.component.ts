import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {RequestsService} from '../../services/request/requests.service';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotifService} from '../../services/notif.service';
import {PostService} from '../../services/post.service';
import {HttpClient} from "@angular/common/http";
import {root_url} from "../../const";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    animations: [routerTransition()]
})
export class MessageComponent implements OnInit {
    postForm: FormGroup;
    bookForm: FormGroup;
    audioForm: FormGroup;
    videoForm: FormGroup;
    loading = false;
    submitted = false;
    booksubmitted = false;
    audiosubmitted = false;
    videosubmitted = false;
    post: any;
    body: any = [];
    nowmobile = true;
    private branches: any;

    constructor(
        private formBuilder: FormBuilder,
        private request: RequestsService,
        private submitData: PostService,
        private notif: NotifService,
        private http: HttpClient) {
        if (window.innerWidth <= 992 ) {
            this.nowmobile = false;
        }
    }

    ngOnInit() {
        this.request.getPost()
            .pipe(first())
            .subscribe(
                data => {
                    this.post = data;
                },
                error => {

                }
            );

        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required],
            branch: ['', Validators.required],
            thumbnail: ['', Validators.required],
            church: ['', Validators.required],
            // visible_to_branches: this.visiblebranch(),
        });

        this.bookForm = this.formBuilder.group({
            booktitle: ['', Validators.required],
            description: ['', Validators.required],
            numberofpages: ['', Validators.required],
            publicdate: ['', Validators.required],
            coverimage: ['', Validators.required],
            authorsname: ['', Validators.required],
            imageofauthor: ['', Validators.required],
            titleofauthor: ['', Validators.required],
            tableofcontent: ['', Validators.required],
            uploadfile: ['', Validators.required],
        });

        this.audioForm = this.formBuilder.group({
            titleofaudio: ['', Validators.required],
            authorsname: ['', Validators.required],
            authornametitle: ['', Validators.required],
            importaudio: ['', Validators.required],
            duration: ['', Validators.required],
            audiothumbnail: ['', Validators.required],
            description: ['', Validators.required],
        });

        this.videoForm = this.formBuilder.group({
            title: ['', Validators.required],
            authorsname: ['', Validators.required],
            authornametitle: ['', Validators.required],
            importvideo: ['', Validators.required],
            videothumbnail: ['', Validators.required],
            description: ['', Validators.required],
        });
    }

    get f() { return this.postForm.controls; }
    get b() { return this.bookForm.controls; }
    get a() { return this.audioForm.controls; }
    get v() { return this.videoForm.controls; }

    visiblebranch () {
        const q = this.branches.split(',');
        return q;
    }

    onSubmit(e, event) {
        switch (e) {
            case 'postForm':
                this.submitted = true;
                if (this.postForm.invalid) {
                    return;
                }
                console.log(this.visiblebranch());
                this.loading = true;
                this.body = this.postForm.value;
                // const body = this.body;
                this.body = this.body.concat(this.visiblebranch());
                break;
            case 'bookForm':
                this.booksubmitted = true;
                if (this.bookForm.invalid) {
                    return;
                }
                break;
            case 'audioForm':
                this.audiosubmitted = true;
                if (this.audioForm.invalid) {
                    return;
                }
                break;
            case 'videoForm':
                this.videosubmitted = true;
                if (this.videoForm.invalid) {
                    return;
                }
                break;
        }

        // this.submitData.postForm(this.body)
        //     // .pipe(first())
        //     .subscribe(
        //         data => {
        //             console.log(data);
        //         },
        //         error => {
        //             this.notif.show({message: error, type: 'error'});
        //             this.loading = false;
        //         });

        this.http.post(`${root_url.apiUrl}post`, this.body)
            .pipe(first())
            .subscribe(
                (data) => {
                    event.preventDefault();
                    console.log(data);
                    this.notif.show({message: data, type: 'success'});
                    this.loading = false;
                },
                (error) => {
                    this.notif.show({message: error, type: 'error'});
                    this.loading = false;
                    event.preventDefault();
                });
    }
}
