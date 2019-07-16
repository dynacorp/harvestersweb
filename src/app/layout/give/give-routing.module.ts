import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiveComponent } from './give.component';

const routes: Routes = [
    {
        path: '', component: GiveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GiveRoutingModule {
}
