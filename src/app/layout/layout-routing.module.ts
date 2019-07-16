import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'message', loadChildren: () => import('./message/message.module').then(m => m.MessageModule) },
            { path: 'give', loadChildren: () => import('./give/give.module').then(m => m.GiveModule) },
            { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
            { path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) },
            { path: 'subscription', loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule) },
            { path: 'testimonies', loadChildren: () => import('./testimonies/testimonies.module').then(m => m.TestimoniesModule) },
            { path: 'prayer-request', loadChildren: () => import('./prayer-request/prayer-request.module').then(m => m.PrayerRequestModule) },
            { path: 'counselling', loadChildren: () => import('./counselling/counselling.module').then(m => m.CounsellingModule) },
            { path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule) },
            { path: 'enquiries', loadChildren: () => import('./enquiries/enquiries.module').then(m => m.EnquiriesModule) },
            { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
