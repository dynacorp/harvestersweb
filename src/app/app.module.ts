import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import {NotifierModule, NotifierService} from 'angular-notifier';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NotifierModule.withConfig( {
            // Custom options in here
            behaviour: {
                autoHide: 2000,
                onClick: false,
                onMouseover: 'pauseAutoHide',
                showDismissButton: true,
                stacking: 4
            },
            position: {
                horizontal: {
                    position: 'left',
                    distance: 12
                },
                vertical: {
                    position: 'bottom',
                    distance: 12,
                    gap: 10
                }
            },
            theme: 'material',
            animations: {
                enabled: true,
                show: {
                    preset: 'slide',
                    speed: 500,
                    easing: 'ease'
                },
                hide: {
                    preset: 'slide',
                    speed: 500,
                    easing: 'ease',
                    offset: 50
                },
                shift: {
                    speed: 500,
                    easing: 'ease'
                },
                overlap: 150
            }
        } )
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
