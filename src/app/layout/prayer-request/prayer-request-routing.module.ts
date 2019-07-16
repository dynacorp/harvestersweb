import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrayerRequestComponent } from './prayer-request.component';

const routes: Routes = [
    {
        path: '',
        component: PrayerRequestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrayerRequestRoutingModule {}
