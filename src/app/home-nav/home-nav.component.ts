import { Component, OnInit, ViewChild, Input } from '@angular/core';
import{trigger, style, transition, animate,  state, useAnimation} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {homeNavSlideAnim} from '../animations';
import { interval, timer } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home-nav',
  animations: [
    trigger('enterSite', [
      state('notEntered', style({
        top: 'calc(100vh)'
      })),
      state('hasEntered', style({
        top: 'calc(100vh - 70px)'
      })),
      transition('*=>hasEntered', animate('300ms'))
    ])
   // , trigger('slider2', [
   //    state('open', style(
   //      {
   //        transform: 'translateY(-15vw)'
   //      }
   //    ))
   //  ]),
   //  trigger('slider1', [
   //    state('open', style(
   //      {
   //        transform: 'translateY(-15vw)'
   //      }
   //    ))
   //  ])
      ,homeNavSlideAnim('slider1'),
    homeNavSlideAnim('slider2'),
    homeNavSlideAnim('slider3'),
    homeNavSlideAnim('slider4')


    // trigger('slider', [
    //   transition('* => open', [
    //   useAnimation(slideNavAnimation)
    //     ]
    //   )]
    // ),




    // trigger('openClose', [
    //   transition('open => closed', [
    //     useAnimation(transAnimation, {
    //       params: {
    //         height: 0,
    //         opacity: 1,
    //         backgroundColor: 'red',
    //         time: '1s'
    //       }
    //     })
    //   ])
    // ])


    // 'slider'

  ],
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {

  @Input() currentState;
  @Input('state') state: string = 'closed';
  @Input('animSlideNavState') animSlideNavState:string = 'closed';
  @Input('jamSeshSlideNavState') jamSeshSlideNavState: string = 'closed';
  @Input('dataSlideNavState') dataSlideNavState: string = 'closed';
  @Input('stitchSlideNavState') stitchSlideNavState: string = 'closed';



  enterState = 'notEntered';





  stitchHover = false;
  yolo: any;
  nextInstrument: any;
  stitchTop: string;
  dataScienceTop: string;
  homeNavBottom: any;
  homeNavAnchor: any;
  animationTop: string;
  slideMenuTransition: string;
  skate2Opacity = 0;
  skate3Opacity = 0;
  skateHover = false;
  skate2Delay = "0s";
  skate3Delay = ".1s";
  synthPosition ="92%";
  keyboardPosition ="4%";
  drumPosition ="-62%";
  clientX = 0;
  image =  "../../assets/img/skate2.png";
  synthTransition = "0s";
  drumTransition = ".3s ease-in";
  keyboardTransition =".3s ease-in";
  spriteIndex = 1;
  top = "0%";
  left = "0%";
  spriteMultiplier = 25;
  event: MouseEvent;


  constructor() {



  }

  ngOnInit() {
    this.nextInstrument = "synth";
    this.slideMenuTransition = 'bottom 1s ease-in';

    this.homeNavAnchor= 'top';
    this.homeNavBottom = '-100vh';//= document.getElementById('matContain').offsetHeight;

  }

  slideState = 'closed';

  slide(state: any) {
    this.slideState = state;
    console.log(this.slideState,"slide");
  }


  slider1Animation():void {
    console.log("sliderAnimation");
    if (this.skateHover === true) {
      this.skate2Opacity = 100;
      this.skate3Opacity = 100;
    } else {
      this.skate2Opacity = 0;
      this.skate3Opacity = 0;
    }
  }


  onAnimationhover(event: MouseEvent): void {
    this.event = event;
    console.log(this.event.type,"eventType");

    if (this.event.type === 'mouseleave') {
      // this.skate2Opacity = 0;
      // this.skate3Opacity = 0;
      // this.skate2Delay = ".1s";
      // this.skate3Delay = "0s";
      //
      // this.animationTop = "0vh";
      this.skateHover = false;

      console.log("left");
      this.animSlideNavState = 'closed';
    }
    if (this.event.type === 'mouseenter') {
      this.animSlideNavState = "open";
      this.skateHover = true;
      // this.slideMenuTransition = 'bottom .3s ease-in';
    }
  }

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
      this.top = "33.333334%";
      this.spriteIndex++;
      console.log(this.spriteIndex - 5,"keee");
      // this.spriteIndex = event.clientX - 7;
    }
    else if (  this.spriteIndex < 16) {
      this.left = String((this.spriteIndex - 11) * this.spriteMultiplier) + '%';
      this.top = "66.67%";
      console.log(this.spriteIndex - 11,"this");
      this.spriteIndex++;
    }
    else if (  this.spriteIndex == 16) {
      this.left = '0%';
      this.top = "100%";
      console.log(this.spriteIndex - 15, "this");
      this.spriteIndex++;
    } else if (this.spriteIndex == 17){
      console.log("sucks");
      this.top = "99.99%";
      this.left = "25%";
      this.spriteIndex = 1;
      console.log(this.spriteIndex,"gee");
      clearInterval(this.yolo);
    }

  }



  slider3Animation(): void {

  }



  onStitchHover(event: MouseEvent): void {
    this.event = event;
    console.log("gamsdf");


    if (this.event.type == 'mouseenter') {
      this.stitchSlideNavState = 'open';

      this.yolo = setInterval(()=>this.sprite(), 50);



      console.log("eel");

    }

    if (this.event.type == 'mouseleave') {
      console.log("left");
      //this.spriteIndex = 10;
      clearInterval(this.yolo);
      this.yolo = setInterval(()=>this.spriteOut(), 50);
      this.stitchSlideNavState = 'closed';

    }
  }




  slider2Animation(): void {


    console.log("drumdone", this.nextInstrument);
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
      this.synthPosition = "0";
      this.keyboardPosition = "-99%";
      this.drumTransition = "0s";
      this.drumPosition = "100%";
      this.nextInstrument = "drum";
    }
    else if (this.nextInstrument == "drum" ) {
      this.drumTransition = ".3s ease-in";
      this.drumPosition = "0";
      this.synthPosition = "-92%";
      this.keyboardTransition = "0s";
      this.keyboardPosition = "100%";
      this.nextInstrument = "keyboard";
    }
  }


  onJamSeshHover(event: MouseEvent): void {
    this.event = event;
    if (this.event.type == 'mouseleave') {
      this.jamSeshSlideNavState = 'closed';
      // console.log("left", this.nextInstrument);



    }
    if (this.event.type == 'mouseenter') {
      this.jamSeshSlideNavState = 'open';
      // console.log("enter",this.nextInstrument);
      // if (this.nextInstrument == "keyboard" ) {
      //   this.keyboardTransition = ".3s ease-in";
      //   this.keyboardPosition = "2%";
      //   this.drumPosition = "-92%";
      //   this.synthTransition = "0s";
      //   this.synthPosition = "100%";
      //   this.nextInstrument = "synth";
      // }
      //
      // else if (this.nextInstrument == "synth" ) {
      //   this.synthTransition = ".3s ease-in";
      //   this.synthPosition = "16%";
      //   this.keyboardPosition = "-99%";
      //   this.drumTransition = "0s";
      //   this.drumPosition = "100%";
      //   this.nextInstrument = "drum";
      // }
      // else if (this.nextInstrument == "drum" ) {
      //   this.drumTransition = ".3s ease-in";
      //   this.drumPosition = "18%";
      //   this.synthPosition = "-92%";
      //   this.keyboardTransition = "0s";
      //   this.keyboardPosition = "100%";
      //   this.nextInstrument = "keyboard";
      // }
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
}
