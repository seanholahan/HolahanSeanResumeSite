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
  skate2Delay = "0s";
  skate3Delay = ".1s";
  synthPosition ="92%";
  keyboardPosition ="4%";
  drumPosition ="-62%";
  nextInstrument: any;
  synthTransition = "0s";
  drumTransition = ".3s ease-in";
  keyboardTransition =".3s ease-in";
  spriteIndex = 1;
  stitchHover = false;
  top = "0%";
  left = "0%";
  yolo: any;
  yo:any;
  spriteMultiplier = 25;
  vid = document.getElementById("video-background");
  videoplayer: any;
  landingCount = 0;
  headerHideWidth:any;


  constructor() {
    this.innerHeight = (window.screen.height) + "px";
    this.innerWidth = (window.screen.width) + "px";
    console.log(innerHeight, innerWidth);
    this.yo = setInterval(()=>this.s(), 500);

  }
  movementX = 0;

  event: MouseEvent;
  clientX = 0;
  clienmovementXtY = 0;








  /////

  s(): void {

    this.landingCount++;
    console.log(this.landingCount, "geeks");
    if (this.landingCount == 3) {
      this.headerHideWidth = '0vw';

    }
    if (this. landingCount == 20) {
      clearInterval(this.yo);
      this.landingCount = 0;
    }


    // this.spriteIndex++;
    // console.log(this.spriteIndex)
    //
    //
    //
    // if (this.spriteIndex < 5) {
    //   this.left = String((this.spriteIndex) * this.spriteMultiplier) + '%';
    //   this.top = "0%";
    //
    // } else if (  this.spriteIndex < 9) {
    //   this.left = String((this.spriteIndex - 5) * this.spriteMultiplier) + '%';
    //   this.top = "33.33333%";
    //
    //  } else if (this.spriteIndex < 11) {
    //   this.left = String((this.spriteIndex-6) * this.spriteMultiplier) + '%';
    //   this.top = "33.333333%";
    //
    //   console.log(this.spriteIndex - 5,"keee");
    //   // this.spriteIndex = event.clientX - 7;
    // }
    //
    //
    // else if (  this.spriteIndex < 16) {
    //   this.left = String((this.spriteIndex - 11) * this.spriteMultiplier) + '%';
    //   this.top = "66.5%";
    //   console.log(this.spriteIndex ," addd");
    //
    // }
    // else if (  this.spriteIndex < 17) {
    //   this.left = '0%';
    //   this.top = "99.7%";
    //   console.log(this.spriteIndex , "this");
    //
    // } else if (this.spriteIndex == 17){
    //   console.log("sucks");
    //   this.top = "0%";
    //   this.left = "0%";
    //   this.spriteIndex = 1;
    //   console.log(this.spriteIndex,"gee");
    //   clearInterval(this.yolo);
    // }
  }

  ////






  sprite(): void {

    console.log(this.spriteIndex,'allo');

    if (this.spriteIndex < 5) {
      this.left = String((this.spriteIndex) * this.spriteMultiplier) + '%';
      this.top = "0%";
      this.spriteIndex++;
    } else if (  this.spriteIndex < 9) {
      this.left = String((this.spriteIndex - 5) * this.spriteMultiplier) + '%';
      this.top = "33.333333%";
      this.spriteIndex++;
    } else {
      clearInterval(this.yolo);
    }
}

spriteOut():void {
  console.log(this.spriteIndex);
  if (this.spriteIndex < 11) {
    this.left = String((this.spriteIndex-6) * this.spriteMultiplier) + '%';
    this.top = "33.333333%";
    this.spriteIndex++;
    console.log(this.spriteIndex - 5,"keee");
    // this.spriteIndex = event.clientX - 7;
  }
  else if (  this.spriteIndex < 16) {
    this.left = String((this.spriteIndex - 11) * this.spriteMultiplier) + '%';
    this.top = "66.5%";
    console.log(this.spriteIndex - 11,"this");
    this.spriteIndex++;
  }
  else if (  this.spriteIndex == 16) {
    this.left = '0%';
    this.top = "99.7%";
    console.log(this.spriteIndex - 15, "this");
    this.spriteIndex++;
  } else if (this.spriteIndex == 17){
    console.log("sucks");
    this.top = "99.7%";
    this.left = "25%";
    this.spriteIndex = 1;
    console.log(this.spriteIndex,"gee");
    clearInterval(this.yolo);
  }

}




  onStitchHover(event: MouseEvent): void {
    this.event = event;

    if (this.event.type == 'mouseenter') {

      this.yolo = setInterval(()=>this.sprite(), 50);


      console.log("eel");

    }

    if (this.event.type == 'mouseleave') {
      console.log("left");
      //this.spriteIndex = 10;
      clearInterval(this.yolo);
      this.yolo = setInterval(()=>this.spriteOut(), 50);

    }
  }



  onAnimationhover(event: MouseEvent): void {
    this.event = event;
    if (this.event.type == 'mouseleave') {
      this.skate2Opacity = 0;
      this.skate3Opacity = 0;
      this.skate2Delay = ".1s";
      this.skate3Delay = "0s";
      console.log("left");
    }
    if (this.event.type == 'mouseenter') {
      this.skate2Opacity = 100;
      this.skate3Opacity = 100;
      this.skate2Delay = "0s";
      this.skate3Delay = ".1s";
      console.log("enter");
    }
  }

  onJamSeshHover(event: MouseEvent): void {
    this.event = event;
    if (this.event.type == 'mouseleave') {
      console.log("left", this.nextInstrument);
      if (this.nextInstrument == "keyboard" ) {
        this.keyboardTransition = ".3s ease-in";
        this.keyboardPosition = "2%";
        this.drumPosition = "-92%";
        this.synthTransition = "0s";
        this.synthPosition = "100%";
        this.nextInstrument = "synth";
      }

      else if (this.nextInstrument == "synth" ) {
        this.synthTransition = ".3s ease-in";
        this.synthPosition = "16%";
        this.keyboardPosition = "-99%";
        this.drumTransition = "0s";
        this.drumPosition = "100%";
        this.nextInstrument = "drum";
      }
      else if (this.nextInstrument == "drum" ) {
        this.drumTransition = ".3s ease-in";
        this.drumPosition = "18%";
        this.synthPosition = "-92%";
        this.keyboardTransition = "0s";
        this.keyboardPosition = "100%";
        this.nextInstrument = "keyboard";
      }


    }
    if (this.event.type == 'mouseenter') {
      console.log("enter",this.nextInstrument);
      if (this.nextInstrument == "keyboard" ) {
        this.keyboardTransition = ".3s ease-in";
        this.keyboardPosition = "2%";
        this.drumPosition = "-92%";
        this.synthTransition = "0s";
        this.synthPosition = "100%";
        this.nextInstrument = "synth";
      }

      else if (this.nextInstrument == "synth" ) {
        this.synthTransition = ".3s ease-in";
        this.synthPosition = "16%";
        this.keyboardPosition = "-99%";
        this.drumTransition = "0s";
        this.drumPosition = "100%";
        this.nextInstrument = "drum";
      }
      else if (this.nextInstrument == "drum" ) {
        this.drumTransition = ".3s ease-in";
        this.drumPosition = "18%";
        this.synthPosition = "-92%";
        this.keyboardTransition = "0s";
        this.keyboardPosition = "100%";
        this.nextInstrument = "keyboard";
      }


    }





  }


  coordinates(event: MouseEvent): void {
  this.clientX = event.clientX;


    if(this.clientX / innerWidth < .33) {
      this.image ="../../assets/img/skate2.png";
    }
    if(this.clientX / innerWidth > .33) {
    }
    if(this.clientX / innerWidth > .66) {
      this.image ="../../assets/img/skate2.png";

    }
  }



  ngOnInit() {
    this.nextInstrument = "synth";

  };
}
