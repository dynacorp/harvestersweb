import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrayerRequestRoutingModule } from './prayer-request-routing.module';
import { PrayerRequestComponent } from './prayer-request.component';

@NgModule({
    imports: [CommonModule, PrayerRequestRoutingModule],
    declarations: [PrayerRequestComponent]
})
export class PrayerRequestModule {}
