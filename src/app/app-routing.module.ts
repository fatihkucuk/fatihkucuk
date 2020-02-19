import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router, NavigationEnd } from '../../node_modules/@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/about-me', pathMatch: 'full', data: { state: 'dashboard/about-me' } },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'about-me' },
      { path: 'about-me', component: AboutMeComponent, data: { state: 'about-me' } },
      { path: 'my-resume', component: ResumeComponent, data: { state: 'my-resume' } },
      { path: 'my-works', component: MyWorksComponent, data: { state: 'my-works' } },
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
  /*   constructor(private router: Router) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      });
    } */

}
