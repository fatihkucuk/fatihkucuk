import { Component, OnInit } from "@angular/core";
import { MatDialog } from "../../../../node_modules/@angular/material";
import { MyWorksPopUpComponent } from "../my-works-pop-up/my-works-pop-up.component";
import { MyWorksModel } from "../../models/my-works-model";
import * as _ from "lodash";

@Component({
  selector: "app-my-works",
  templateUrl: "./my-works.component.html",
  styleUrls: ["./my-works.component.css"]
})
export class MyWorksComponent implements OnInit {
  myWorkModel = new MyWorksModel();
  myWorks = new Array<MyWorksModel>();
  displayImageIcon: boolean = false;
  opacity: number = 0.6;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.myWorkModel.name = "Pilotaj Ekranı-1";
    this.myWorkModel.description = "";
    this.myWorkModel.imagePath = "./assets/my-works-images/pilotaj-1.gif";
    this.myWorks.push(_.cloneDeep(this.myWorkModel));

    this.myWorkModel.name = "Pilotaj Ekranı-2";
    this.myWorkModel.description = "";
    this.myWorkModel.imagePath = "./assets/my-works-images/pilotaj-2.gif";
    this.myWorks.push(_.cloneDeep(this.myWorkModel));

    this.myWorkModel.name = "Marka Ekranı-1";
    this.myWorkModel.description = "";
    this.myWorkModel.imagePath = "./assets/my-works-images/Marka-1.gif";
    this.myWorks.push(_.cloneDeep(this.myWorkModel));

    this.myWorkModel.name = "Marka Ekranı-2";
    this.myWorkModel.description = "";
    this.myWorkModel.imagePath = "./assets/my-works-images/Marka-2.gif";
    this.myWorks.push(_.cloneDeep(this.myWorkModel));

    this.myWorkModel.name = "Marka Ekranı-3";
    this.myWorkModel.description = "";
    this.myWorkModel.imagePath = "./assets/my-works-images/Marka-3.gif";
    this.myWorks.push(_.cloneDeep(this.myWorkModel));

    this.myWorkModel.name = "Marka Ekranı-4";
    this.myWorkModel.description = "";
    this.myWorkModel.imagePath = "./assets/my-works-images/Marka-4.gif";
    this.myWorks.push(_.cloneDeep(this.myWorkModel));
  }
  openDialog(imgPath: string): void {
    const dialogRef = this.dialog.open(MyWorksPopUpComponent, {
      width: "250px",
      data: imgPath
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  imageHovered() {
    this.displayImageIcon = !this.displayImageIcon;
    if (this.displayImageIcon) {
      this.opacity = 1;
    } else {
      this.opacity = 0.6;
    }
  }
}
