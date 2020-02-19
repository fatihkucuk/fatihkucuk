import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

enum PageMode {
  NONE = -1,
  aboutMe = 0,
  resume = 1,
  works = 2,
  blog = 3,
  contact = 4
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  @Output() onPageModeChanged = new EventEmitter<PageMode>();
  @Input() pageMode: PageMode = PageMode.aboutMe;
  param: string = '';

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageMode = PageMode.aboutMe;
    if (this.router) {
      if (this.router.url === '/dashboard/about-me') {
        this.pageMode = PageMode.aboutMe;
      } else if (this.router.url === '/dashboard/my-resume') {
        this.pageMode = PageMode.resume;
      } else if (this.router.url === '/dashboard/my-works') {
        this.pageMode = PageMode.works;
      } else if (this.router.url === '/dashboard/about-me') {
        this.pageMode = PageMode.contact;
      }
    }
  }

  itemClicked(clicked) {
    if (clicked) {

      if (clicked === 'aboutMeClicked') {
        this.pageMode = PageMode.aboutMe;
        /* this.onPageModeChanged.emit(this.pageMode); */
        this.scrollBottom();

        this.router.navigateByUrl('dashboard/about-me', { replaceUrl: true })
      }
      if (clicked === 'resumeClicked') {
        this.pageMode = PageMode.resume;
        /*         this.onPageModeChanged.emit(this.pageMode); */
        this.scrollBottom();

        this.router.navigateByUrl('dashboard/my-resume', { replaceUrl: true })

      }
      if (clicked === 'worksClicked') {
        this.pageMode = PageMode.works;

        /*                 this.onPageModeChanged.emit(this.pageMode);  */

        this.router.navigateByUrl('dashboard/my-works', { replaceUrl: true })
        this.scrollBottom();



      }
      if (clicked === 'blogClicked') {

        this.scrollBottom();
        this.pageMode = PageMode.blog;
        this.onPageModeChanged.emit(this.pageMode);

      }
      if (clicked === 'contactClicked') {
        this.pageMode = PageMode.contact;
        this.onPageModeChanged.emit(this.pageMode);
        this.router.navigateByUrl('dashboard/about-me', { replaceUrl: true })

        this.scrollBottom();

      }
    }
  }

  scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
