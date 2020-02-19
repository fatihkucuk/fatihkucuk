import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-my-works-pop-up',
  templateUrl: './my-works-pop-up.component.html',
  styleUrls: ['./my-works-pop-up.component.css']
})
export class MyWorksPopUpComponent implements OnInit{
  imgPath: string;
  constructor(
    public dialogRef: MatDialogRef<MyWorksPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit(){
      this.dialogRef.updateSize('auto', 'auto');
      this.imgPath = this.data;
    }
}
