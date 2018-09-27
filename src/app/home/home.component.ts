import { Component, OnInit, ViewChild, Input } from '@angular/core';
import{trigger, style, transition, animate,  state, stagger} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NavbarService } from '../navigation/navigation.service';




//import { fadeInAnimation } from '../app-animations/index';

@Component({
  selector: 'app-home',


  templateUrl: './home.component.html',
  providers: [],
  animations: [
    trigger('portraitState', [
      state('hidden', style({
        transform: 'scale(0)'
      })),
      state('visible', style({
        transform: 'scale(1)'
      })),
      transition('hidden <=> visible', animate('500ms'))
    ]),
    trigger('headerState', [
      state('centerAligned', style({
        top: '26vh'
      })),
      state('topAligned', style({
        top: '7vh'
      })),
      transition('topAligned <=> centerAligned',  animate('500ms'))


    ])
  ],

  styleUrls: ['./home.component.scss']

})







export class HomeComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: any;
  @Input() currentState;
  @Input() currentPortraitState = 'hidden';
  @Input() currentHeaderState = 'centerAligned';

  // currentState: string;
  // currentState = 'state1';
  // changeState(state: any){
  //   console.log('allo', this.currentState);
  //   this.currentState= state;
  //
  // }

  innerHeight: any;
  innerWidth: any;


  enterOpacity:any;
  enterDisplay: any;
  videoOpacity: any;
  headerTop : any;

  homeNavOpacity: any;
  homeNavDisplay:any;
  homeNavTop:any;
  homeTransition:any;

  portraitTransform: string;




  enterState = 'notEntered';

  enterSite(state: any) {
    this.enterState = state;
  }




  yo:any;



  landingCount = 0;
  headerHideWidth:any;

  videoPlay: boolean;


  constructor() {


    this.portraitTransform = 'scale(0)';
    this.enterOpacity = '100';
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




 startAnim(event:any): void {
   this.videoOpacity = "100";
   this.enterDisplay ='none';
    // this.changeState('state2');

   if (this.videoPlay == false) {
     this.videoPlayer.nativeElement.play();
   } else  {
     this.videoPlayer.nativeElement.pause();
   }
 }



 onTimeUpdate(value) : void {
   //console.log("curretnt",value.target.currentTime);
   var videoTime  = value.target.currentTime;
   if(videoTime > .9) {
     this.headerHideWidth = '48vw';

   } if (videoTime > 1.8) {
     this.headerHideWidth = '18vw';


   }
   if (videoTime >= 3.6) {
     this.videoOpacity = '0';

   }

   if (videoTime >= 3.8) {
     //this.headerHideWidth = '75vw';
     this.headerHideWidth = '0';

     this.homeNavDisplay = 'block';
     this.homeNavOpacity = '100';

     this.homeNavTop = 'calc(50vh - 70px)';
     //this.homeNavBottom = "0vh";
     //this.homeNavAnchor = 'bottom';
     this.homeTransition = 'top 3s ease-in';
     this.headerTop= '0vh';
     this.enterSite('hasEntered');
     this.currentPortraitState = 'visible';
     this.currentHeaderState = 'topAligned';



   }
 }



  s(): void {

    this.landingCount++;
   // console.log(document.getElementById('video-background').currentTime);
   // console.log(this.video.currentTime);
    if (this.landingCount == 3) {
      this.headerHideWidth = '20vw';


    }
    if (this. landingCount == 14) {
      // clearInterval(this.yo);
      // this.landingCount = 0;
      // this.headerHideWidth = '0';
      // this.videoOpacity = 0;
      // this.homeNavDisplay = 'block';
      // this.homeNavOpacity = '100';
      //
      // this.homeNavTop = '0vh';



    }
  }


}


