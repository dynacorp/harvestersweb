import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { PageHeaderModule } from '../../shared';
import {ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from "../layout.module";

@NgModule({
    imports: [CommonModule, Ng2Charts, MessageRoutingModule, PageHeaderModule, ReactiveFormsModule, LayoutModule],
    declarations: [MessageComponent]
})
export class MessageModule {}
