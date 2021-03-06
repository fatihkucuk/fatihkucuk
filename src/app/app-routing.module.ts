import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "../../node_modules/@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about-me",
    pathMatch: "full",
    data: { state: "/about-me" },
  },
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "about-me" },
      {
        path: "about-me",
        component: AboutMeComponent,
        data: { state: "about-me" },
      },
      {
        path: "my-resume",
        component: ResumeComponent,
        data: { state: "my-resume" },
      },
      {
        path: "contact",
        component: ContactComponent,
        data: { state: "contact" },
      },
    ],
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
