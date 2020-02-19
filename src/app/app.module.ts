import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ContentComponent } from './components/content/content.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AppRoutingModule } from './/app-routing.module';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatTooltipModule } from '@angular/material';
import { MyWorksPopUpComponent } from './components/my-works-pop-up/my-works-pop-up.component'
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { CommonModule } from '../../node_modules/@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    NavigationBarComponent,
    ContentComponent,
    AboutMeComponent,
    ResumeComponent,
    MyWorksComponent,
    MyWorksPopUpComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTooltipModule
  ],
  entryComponents: [
    MyWorksComponent,
    MyWorksPopUpComponent
  ],
  exports: [
    MyWorksComponent,
    MyWorksPopUpComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
