import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProfileModel } from "../../models/profile-model";
import { Router } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profileModel = new ProfileModel();
  downloadURL: string;
  cvLink: string =
    "https://firebasestorage.googleapis.com/v0/b/resume-web-site.appspot.com/o/FATIH_KUCUK_38884682074_CV%20(1)-d%C3%B6n%C3%BC%C5%9Ft%C3%BCr%C3%BCld%C3%BC.pdf?alt=media&token=46bd9620-82cb-453a-9ee6-fddec7051a5a";
  cvHovered: boolean = false;
  contactMeHovered: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.profileModel.name = "Fatih Küçük";
    this.profileModel.title = "Software Developer";
    this.profileModel.company = "Huawei";
    this.profileModel.linkedin =
      "https://www.linkedin.com/in/fatih-küçük-2b546812b";
    this.profileModel.github = "https://github.com/fatihkucuk";
  }

  contactMeClicked() {
    this.router.navigateByUrl("dashboard/contact", { replaceUrl: true });
  }

  downloadCvClicked() {
    window.open(this.cvLink);
  }
}
