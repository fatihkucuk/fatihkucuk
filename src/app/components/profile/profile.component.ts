import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileModel } from '../../models/profile-model';
import { Router } from '../../../../node_modules/@angular/router';
enum PageMode {
  NONE = -1,
  aboutMe = 0,
  resume = 1,
  works = 2,
  blog = 3,
  contact = 4
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() onPageModeChanged = new EventEmitter<PageMode>();
  pageMode: PageMode = PageMode.NONE;
  profileModel = new ProfileModel();
  downloadURL: string;
  cvLink: string = 'https://firebasestorage.googleapis.com/v0/b/resume-web-site.appspot.com/o/FATIH_KUCUK_38884682074_CV.pdf?alt=media&token=fba5513c-1aac-4ead-b8e8-e9313fca0fee';
  cvHovered: boolean = false;
  contactMeHovered: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.profileModel.name = 'Fatih Küçük';
    this.profileModel.title = 'Software Developer';
    this.profileModel.company = 'TCM Bilişim ve Danışmanlık Hizmetleri';
    this.profileModel.linkedin = 'https://www.linkedin.com/in/fatih-küçük-2b546812b';
    this.profileModel.github = 'https://github.com/fatihkucuk';
  }

  contactMeClicked() {
    this.pageMode = PageMode.aboutMe;
    this.onPageModeChanged.emit(this.pageMode);
    this.router.navigateByUrl('dashboard/about-me', { replaceUrl: true });
  }

  downloadCvClicked() {
    window.open(this.cvLink);
  }
}
