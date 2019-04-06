import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { HttpModule } from '@angular/'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbacksComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }