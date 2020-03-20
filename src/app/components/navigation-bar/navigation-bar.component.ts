import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  Router,
  NavigationEnd
} from "../../../../node_modules/@angular/router";
import { PageMode } from "src/app/enums/PageMode";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {
  pageMode: PageMode = PageMode.AboutMe;

  constructor(private router: Router) {
    router.events.subscribe(navigationEvent => {
      if (navigationEvent instanceof NavigationEnd) {
        const url = navigationEvent.url;
        if (url) {
          if (url === "/dashboard/about-me") {
            this.pageMode = PageMode.AboutMe;
          } else if (url === "/dashboard/my-resume") {
            this.pageMode = PageMode.Resume;
          } else if (url === "/dashboard/my-works") {
            this.pageMode = PageMode.Works;
          } else if (url === "/dashboard/contact") {
            this.pageMode = PageMode.Contact;
          }
        }
      }
    });
  }

  ngOnInit() {}

  itemClicked(clickedItem) {
    if (clickedItem) {
      if (clickedItem === "aboutMeClicked") {
        this.router.navigateByUrl("dashboard/about-me", { replaceUrl: true });
      }
      if (clickedItem === "resumeClicked") {
        this.router.navigateByUrl("dashboard/my-resume", { replaceUrl: true });
      }
      if (clickedItem === "worksClicked") {
        this.router.navigateByUrl("dashboard/my-works", { replaceUrl: true });
      }
      if (clickedItem === "contactClicked") {
        this.router.navigateByUrl("dashboard/contact", { replaceUrl: true });
      }
      if (this.isMobileDevice()) this.scrollBottom();
    }
  }

  isMobileDevice() {
    return window.screen.width <= 767;
  }

  scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
