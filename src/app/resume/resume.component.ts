import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.loadingAnimation();
  }

  interval;
  frameNumber: number = 0;
  backgroundYPos:string = this.frameNumber.toString()+'px';
  backgroundXPos: string = '0';
loadingAnimation(): void {
  this.interval = setInterval(() => {
    if (this.frameNumber < 24) {
      this.frameNumber++;
    } else  {
      this.frameNumber = 0;
    }

    this.backgroundXPos = (this.frameNumber * 150).toString()+'px';

    console.log(this.frameNumber, "frame");



}, 100)

}


}
