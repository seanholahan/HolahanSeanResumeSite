import { Component, OnInit } from '@angular/core';


import { fadeInAnimation } from '../app-animations/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./home.component.scss']

})



export class HomeComponent implements OnInit {

  innerHeight: any;
  innerWidth: any;
  image =  "../../assets/img/skate2.png";
  skate2Opacity = 0;
  skate3Opacity = 0;

  constructor() {
    this.innerHeight = (window.screen.height) + "px";
    this.innerWidth = (window.screen.width) + "px";
    console.log(innerHeight, innerWidth);
  }

  event: MouseEvent;
  clientX = 0;
  clientY = 0;

  onEvent(event: MouseEvent): void {
    this.event = event;
  }

  coordinates(event: MouseEvent): void {
  this.clientX = event.clientX;
  this.clientY = event.clientY;
    if(this.clientX / innerWidth < .33) {
      console.log("bloop");
      this.image ="../../assets/img/skate2.png";
      this.skate2Opacity = 0;
      this.skate3Opacity = 0;
    }
    if(this.clientX / innerWidth > .33) {
      console.log("bloop");
      this.image ="../../assets/img/skate2.png";
      this.skate2Opacity = 100;
      this.skate3Opacity = 0;

    }
    if(this.clientX / innerWidth > .66) {
      console.log("geep");
      this.image ="../../assets/img/skate2.png";
      this.skate2Opacity = 100;
      this.skate3Opacity = 100;
    }
  }



  ngOnInit() {

  };
}
