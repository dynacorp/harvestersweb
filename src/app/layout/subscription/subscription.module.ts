import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, SubscriptionRoutingModule, PageHeaderModule],
    declarations: [SubscriptionComponent]
})
export class SubscriptionModule {}
