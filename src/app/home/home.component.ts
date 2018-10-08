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
        transform: 'scaleX(0)'
        //opacity: 0
      })),
      state('shown', style({
        transform: 'scaleX(1)'
        //opacity: 1
      })),
      transition('hidden <=> shown',  animate('300ms 500ms'))
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
      // state('hidden', style({
      //   transform: 'scaleY(0) translateX(-21vh)'
      // })),

      state('visible', style({

        transform: 'scaleY(1) translateX(-21vh)',
       // borderRadius: "10px 10px 10px 10px"
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
        // top: '26vh',
       // fontSize:'10vw',
        textShadow: 'none'
      })),
      state('topAligned', style({
        // top: '3vh',
       // fontSize:'10vw'
        //scale: '.5'
      })),
      state('topAlignedWide', style({
        //
        // fontSize:'14vw',
        textShadow: '1px 1px orange',
        letterSpacing: '2.5vw'
        //scale: '.5'
      })),
      transition('topAligned <=> centerAligned',  animate('300ms')),
      transition('topAligned <=> topAlignedWide',  animate('300ms 200ms'))
    ]),





    trigger('headerPosition', [
      state('middle', style({
        height: '70vh'
      })),
      state('topAligned', style({
        height: '26vh'
      })),
      transition('middle <=> topAligned',  animate('300ms'))
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
  @Input() currentPortraitState = "shown"; //hidden
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
  @Input() currentHeaderPosition: string = "middle";


  interval;
  buildingCount: number = 1;
  intervalAmount: number = 300;
  enterState: string = 'notEntered';
  animationStartToggle: boolean = false;
  descriptionToggle: boolean = false;
  headerToggle: boolean = false ;
  landingPointerEvents: string = 'none';
  headerHideTransition: string = 'width 1.2s';
  innerHeight: any;
  innerWidth: any;
  buildSwitch: boolean;
  buildSwitch2: boolean;


  enterOpacity:string = '100';

  enterDisplay: any;
  videoOpacity: string =  '0';
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


  widenHeader(): void {
    console.log('widen');
    if (this.currentHeaderState == 'topAligned') {
      this.currentHeaderState = 'topAlignedWide';

      console.log('yao');
    }

  }




  buildingAnimation(): void {

    setTimeout(()=>{ this.animationStartToggle = true }, 600);

    if (this.animationStartToggle == true) {
      // this.descriptionState = 'hidden';




      this.interval = setInterval(() => {
        switch(this.buildingCount) {
          case 1: {
            this.building1State = 'visible';
            this.buildingCount++;
            this.intervalAmount = 100;
            console.log('working', this.intervalAmount);
            break;
          }
          case 2: {
            this.building2State = 'visible';
            this.buildingCount++;
            console.log('working2', this.intervalAmount);
            break;
          }
          case 3: {
            this.building3State = 'visible';

            this.buildingCount++;
            console.log('working3', this.intervalAmount);
            break;
          }
          case 4: {
            this.building4State = 'visible';
            this.buildingCount++;
            console.log('working4', this.intervalAmount);
            break;
          }
          case 5: {
            clearInterval(this.interval);
            break;
          }
        }
      }, 100)
    }
  }

  startAnim(event:any): void {
    this.videoOpacity = "100";
    this.enterDisplay ='none';
    this.descriptionToggle = true;
    // this.animationStartToggle = true;
    this.headerToggle = true;
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

      this.headerHideTransition = 'width 0s';

      this.homeNavDisplay = 'block';
      this.homeNavOpacity = '100';
      //this.homeNavTop = 'calc(100vh - 70px)';
      //this.homeNavBottom = "0vh";
      //this.homeNavAnchor = 'bottom';
      this.homeTransition = 'top 3s ease-in';

      console.log(this.currentState, 'currentState');
      this.currentPortraitState = 'visible';
      this.yellowBGState = 'shown';

      console.log('ADSFASDFA',this.currentHeaderState);
      this.currentState = 'hasEntered';
      this.currentHeaderPosition = 'topAligned';
      this.currentHeaderState = 'topAligned';


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


