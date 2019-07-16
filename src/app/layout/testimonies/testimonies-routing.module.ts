import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimoniesComponent } from './testimonies.component';

const routes: Routes = [
    {
        path: '',
        component: TestimoniesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestimoniesRoutingModule {}
