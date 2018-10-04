import { Component, OnInit, ViewChild, Input } from '@angular/core';
import{trigger, style, transition, animate,  state, stagger, query, group} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NavbarService } from '../navigation/navigation.service';
import {buildingAnimation} from '../animations';





//import { fadeInAnimation } from '../app-animations/index';

@Component({
  selector: 'app-home',


  templateUrl: './home.component.html',
  providers: [],
  animations: [
    buildingAnimation('building1'),
    buildingAnimation('building2'),
    buildingAnimation('building3'),
    buildingAnimation('building4'),

    trigger('enterSite', [
      state('notEntered', style({
        top: 'calc(100vh)'
      })),
      state('hasEntered', style({
        top: 'calc(100vh - 70px)'
      })),
      transition('*=>hasEntered', animate('300ms'))
    ]),


    trigger('yellowBG', [
      state('hidden', style({
        // transform: 'scaleX(0)'
        //transform: 'scaleY(0)'
        opacity: 0
      })),
      state('shown', style({
        // transform: 'scaleX(1)'
         opacity: 1
        // transform: 'scaleY(1)'

      })),
      transition('hidden <=> shown',  animate('300ms'))
    ]),



    trigger('description', [
      state('hidden', style({
        // borderRadius: "10px 10px 10px 10px",
        transform: 'translateX(-21vh)'
      })),
      state('shown', style({
        // borderRadius: "0px 10px 10px 0px",
        transform: 'translateX(0vh)'
      })),

      transition('hidden <=> shown',  animate('300ms 300ms'))
    ]),

    trigger('portraitState', [
      state('hidden', style({
        transform: 'scaleY(0) translateX(-21vh)'
      })),

      state('visible', style({

        transform: 'scaleY(1) translateX(-21vh)',
        borderRadius: "10px 10px 10px 10px"
      })),
      state('pushed', style({
        transform: 'scaleY(1) translateX(calc(-42vh + 1px))',
        borderRadius: "0px 0px 0px 0px"

      })),

      transition('hidden <=> visible', animate('300ms')),
      transition('visible <=> pushed', animate('300ms 300ms'))
    ]),



    trigger('headerState', [
      state('centerAligned', style({
        top: '26vh'
      })),
      state('topAligned', style({
        top: '7vh',
        //scale: '.5'
      })),
      transition('topAligned <=> centerAligned',  animate('500ms'))
    ])
    ,trigger('headerHideState', [
      state('hidden', style({
        transform: 'translateX(0)'
      })),
      state('shown', style({
        top: '7vh'
      })),
      transition('hidden <=> shown',  animate('1200ms'))
    ])



    //KEEP THIS CODE
    //https://github.com/angular/angular/issues/18775
    // trigger('portraitState', [
    //
    //   transition('hidden => visible',
    //     [query('.buildings',  style({
    //       transform: 'translateY(0%)'
    //     }))
    //       ,
    //       query('.buildings',
    //         stagger('60ms', [
    //           animate('600ms', style({
    //             transform: 'translateY(-100%)'
    //           }))
    //         ]))
    //     ]),









  ],

  styleUrls: ['./home.component.scss']

})








export class HomeComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: any;
  @Input() currentPortraitState = "hidden";
  @Input() currentHeaderState = 'centerAligned';
  @Input() currentHeaderHideState = 'hidden';
  @Input() currentBuildState ;
  @Input() a = 'hidden';
  @Input() building1State: string = 'hidden';
  @Input() building2State: string = 'hidden';
  @Input() building3State: string = 'hidden';
  @Input() building4State: string = 'hidden';
  @Input() descriptionState: string = 'hidden';
  @Input() currentState: string = 'notEntered';
  @Input() yellowBGState: string = 'hidden';


  interval;
  buildingCount: number = 1;
  enterState: string = 'notEntered';
  animationStartToggle: boolean = false;
  descriptionToggle: boolean = false;
  landingPointerEvents: string = 'none';
  innerHeight: any;
  innerWidth: any;
  buildSwitch: boolean;
  buildSwitch2: boolean;


  enterOpacity:string = '100';
  descriptionOpacity: string = '0';
  enterDisplay: any;
  videoOpacity: any;
  headerTop : any;

  homeNavOpacity: any;
  homeNavDisplay:any;
  homeNavTop:any;
  homeTransition:any;

  portraitTransform: string;









  enterSite(state: any) {
    this.enterState = state;
  }




  yo:any;



  landingCount = 0;
  headerHideWidth:any;

  videoPlay: boolean;



  constructor() {

    this.buildSwitch = false;
    this.buildSwitch2 = false;
    // this.portraitTransform = 'scale(0)';
    this.enterDisplay = 'block';
    this.videoOpacity = '0';

    this.headerTop= '26vh';
    //console.log("navbottom",this.homeNavBottom);
    //this.homeNavBottom =document.getElementById('matContain').clientHeight;
    this.innerHeight = (window.screen.height) + "px";
    this.innerWidth = (window.screen.width) + "px";
    // this.homeTransition = 'top 1s ease-out';
    //console.log("geek",innerHeight, innerWidth);
    this.videoPlay = false;
  }

  movementX = 0;
  event: MouseEvent;
  clienmovementXtY = 0;

  ngOnInit() {
    this.homeNavOpacity = '1';
    this.homeNavDisplay = 'none';
    this.homeTransition = 'top 3s ease-in';
    this.homeNavTop = 'calc(100vh + 200px)';
  };

  descriptionAnimation(): void {

    if (this.descriptionToggle == true) {


      this.descriptionState = 'shown';
      this.currentPortraitState = 'pushed';
      this.landingPointerEvents = 'all';
      console.log("descriptionAnimation", this.descriptionState);
    }
  }



  buildingAnimation(): void {
    if (this.animationStartToggle == true) {
      // this.descriptionState = 'hidden';
      this.descriptionOpacity = '1';

      console.log('working');
      this.interval = setInterval(() => {
        switch(this.buildingCount) {
          case 1: {
            this.building1State = 'visible';
            this.buildingCount++;
            break;
          }
          case 2: {
            this.building2State = 'visible';
            this.buildingCount++;
            break;
          }
          case 3: {
            this.building3State = 'visible';

            this.buildingCount++;
            break;
          }
          case 4: {
            this.building4State = 'visible';
            this.buildingCount++;
            break;
          }
          case 5: {
            clearInterval(this.interval);
            break;
          }
        }
      },100)
    }
  }

  startAnim(event:any): void {
    this.videoOpacity = "100";
    this.enterDisplay ='none';
    this.descriptionToggle = true;
    this.animationStartToggle = true;
    // this.changeState('state2');

    if (this.videoPlay == false) {
      this.videoPlayer.nativeElement.play();
    } else  {
      this.videoPlayer.nativeElement.pause();
    }
  }

  onTimeUpdate(value) : void {
    var videoTime  = value.target.currentTime;
    if(videoTime > .9) {
      this.headerHideWidth = '48vw';
    }
    if (videoTime > 1.8) {
      this.headerHideWidth = '18vw';
    }
    if (videoTime >= 3.6) {
      this.videoOpacity = '0';
    }
    if (videoTime >= 3.8) {
      this.headerHideWidth = '0';
      this.homeNavDisplay = 'block';
      this.homeNavOpacity = '100';
      //this.homeNavTop = 'calc(100vh - 70px)';
      //this.homeNavBottom = "0vh";
      //this.homeNavAnchor = 'bottom';
      this.homeTransition = 'top 3s ease-in';

      console.log(this.currentState, 'currentState');
      this.currentPortraitState = 'visible';
      this.yellowBGState = 'shown';
      this.currentHeaderState = 'topAligned';
      this.currentState = 'hasEntered';
      this.buildSwitch = true;
      this.currentBuildState = 'built';

    }
  }



  s(): void {

    this.landingCount++;
    // console.log(document.getElementById('video-background').currentTime);
    // console.log(this.video.currentTime);
    if (this.landingCount == 3) {
      //this.headerHideWidth = '20vw';
      this.currentHeaderHideState = 'shown';
    }
    if (this. landingCount == 14) {
    }
  }
}


