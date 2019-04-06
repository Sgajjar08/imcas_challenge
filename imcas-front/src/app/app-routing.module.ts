import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'feedbacks', pathMatch: 'full' },
  { path: 'feedbacks/:id', component: ProfileComponent },
  { path: 'feedbacks', component: FeedbacksComponent },
  { path: '**', component: FeedbacksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
