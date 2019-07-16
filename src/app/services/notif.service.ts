import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({ providedIn: 'root' })
export class NotifService {

    private readonly notifier: NotifierService;

    constructor( private notifierService: NotifierService ) {
        this.notifier = notifierService;
    }

     public show({type, message}) {
        this.notifier.show( {
            type: type,
            message: message
        } );
        // this.notifier.notify( 'success', 'You are awesome! I mean it!' );
    }
}
