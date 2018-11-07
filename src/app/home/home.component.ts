import { Component, OnInit, ViewChild, Input,Injectable,AfterViewInit, NgModule } from '@angular/core';
import{trigger, style, transition, animate,  state, stagger, query, group} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NavbarService } from '../navigation/navigation.service';
import {buildingAnimation} from '../animations';
import {SharedService}   from '../shared.service';
import {Subscription} from 'rxjs/Subscription';
import { Observable, of } from 'rxjs';
//import { Subscription } from 'rxjs/Rx';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //providers: [SharedService],
  animations: [
    buildingAnimation('building1'),
    buildingAnimation('building2'),
    buildingAnimation('building3'),
    buildingAnimation('building4'),

    trigger('enterSite', [
      state('notEntered', style({
        transform: 'translateY(60px)'
      })),
      state('hasEntered', style({
        transform: 'translateY(0px)'
      })),
      transition('*=>hasEntered', animate('300ms'))
    ]),
    trigger('cloudBG', [
      state('hidden', style({
       // transform: 'scaleX(0)',
        zIndex: '-11',
        opacity: 0
      })),
      state('shown', style({
       // transform: 'scaleX(1)',
        zIndex: '-11',
        opacity: .7
      })),

      state('opaque', style({
        // transform: 'scaleX(1)',
        zIndex: '-11',
        opacity: .7
      })),
      transition('hidden <=> shown',  animate('1500ms')),
      transition('opaque <=> shown',  animate('600ms 300ms'))
    ]),
    trigger('description', [
      state('hidden', style({
        // borderRadius: "10px 10px 10px 10px",
        opacity: 0,
        transform: 'translateX(-21vh)'
      })),
      state('shown', style({
        // borderRadius: "0px 10px 10px 0px",
        opacity: 1,
        transform: 'translateX(0vh)'
      })),

      transition('hidden <=> shown',  animate('500ms 300ms'))
    ]),


    trigger('opacityState', [
      state('hidden', style({
        opacity: '0'
      })),
      state('visible', style({
        opacity: '1'
      })),
      transition('hidden <=> visible', animate('1000ms 700ms'))
    ]),

    trigger('portraitState', [
      state('hidden', style({
        transform: 'scaleX(0)'
      })),

      state('visible', style({
        transform: 'scaleX(1)'
        //transform: 'scaleY(1) translateX(-21vh)',
       // borderRadius: "10px 10px 10px 10px"
      })),
      state('pushed', style({
        borderRadius: "0px 0px 0px 0px",
        transform: 'scaleX(1) )'
      })),
      transition('hidden <=> visible', animate('200ms 300ms')),
      transition('visible <=> pushed', animate('500ms 300ms'))
    ]),
    trigger('headerState', [
      state('centerAligned', style({
        // top: '26vh',
       // fontSize:'10vw',
        textShadow: 'none',
        letterSpacing: '0'
      })),
      state('topAligned', style({
        // top: '3vh',
       // fontSize:'10vw'
        //scale: '.5'
        letterSpacing: '0'
      })),
      state('topAlignedWide', style({
        //
        // fontSize:'14vw',
        textShadow: '2px 2px orange',
        letterSpacing: '2.5vw'
        //scale: '.5'
      })),
      transition('topAligned <=> centerAligned',  animate('300ms')),
      transition('topAligned <=> topAlignedWide',  animate('300ms 200ms')),
      transition('centerAligned <=> topAlignedWide',  animate('200ms 300ms')),
    ]),
    trigger('headerPosition', [
      state('middle', style({
        height: '80vh'  //80vh
      })),
      state('topAligned', style({
        height: '22vh'
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
  ],

  styleUrls: ['./home.component.scss']

})


// @NgModule({
//   providers: [SharedService]
// })







export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('videoPlayer') videoPlayer: any;
  @Input() currentPortraitState = "hidden"; //hidden
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
  @Input() cloudBGState: string = 'hidden';
  @Input() currentHeaderPosition: string = "middle";
  @Input() currentOpacityState: string = 'hidden';


  mediaQuery$: Subscription;

  // The active media query (xs | sm | md | lg | xl)
  activeMediaQuery: string;




  interval;
  buildingCount: number = 1;
  intervalAmount: number = 300;
  enterState: string = 'notEntered';
  animationStartToggle: boolean = false;
  descriptionToggle: boolean = false;
  headerToggle: boolean = false ;
  landingPointerEvents: string = 'none';
  headerHideTransition: string = 'width 0s';
  landingBackgroundColor: string = '#6E9EC1';//'#DD6E42';
  innerHeight: any;
  innerWidth: any;
  buildSwitch: boolean;
  buildSwitch2: boolean;




  enterOpacity:string = '100';

  enterDisplay: any;
  videoOpacity: string =  '0';
  videoDisplay: string = 'block';
  videoZIndex: string;
  headerTop : any;

  homeNavOpacity: any;
  homeNavDisplay:any;
  homeNavTop:any;
  homeTransition:any;
  leftTextTransform: string = '0';
  rightTextTransform: string = '0';
  seanTranslate: string = '0';
  seanRotate: string = '0';
  transformValue: number = 0;


  enterSite(state: any) {
    this.enterState = state;
  }
  yo:any;
  headerHideWidth:any;

  videoPlay: boolean;
  aboutToggle: Observable<number>;
  playAnim: boolean;



  constructor(
    private sharedService: SharedService,
    private observableMedia: ObservableMedia
  ) {}

  movementX = 0;
  event: MouseEvent;
  clienmovementXtY = 0;

  ngAfterViewInit () {

    this.mediaQuery$ = this.observableMedia.subscribe( (change: MediaChange) => {
      this.activeMediaQuery = `${change.mqAlias}`;
      if (this.activeMediaQuery === 'xs') {
        // Here goes code for update data in xs or sm (small screen)
        console.log("small");
      } else {
        // Here goes code for update data in gt-sm (bigger screen)
        console.log("big");
      }
    });
  }


  ngOnInit() {

    console.log('playAnimationTogglewerk', this.sharedService);
    //console.log(this.sharedService);
    //this.subscription = this.sharedService.navItem$.subscribe(aboutToggle => this.aboutToggle = aboutToggle)
    this.playAnim = this.sharedService.playAnim$;
    console.log(this.aboutToggle,'yovalue');



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


    //toggle to turn off enter Animation
    //

    // if (navigator.userAgent.toLowerCase().indexOf('safari') != -1) {
    //   if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    //     this.playAnim = true;
    //     console.log ("true true");
    //   } else {
    //     this.playAnim = false;
    //     console.log ("false false");
    //   }
    // }

  console.log("eek", );

    // if((/constructor/i.test(window.HTMLElement) ||
    //   (function (p) { return p.toString()
    //     === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification)) == true) {
    //
    // }


//this.playAnim == false
    if (true) {

      this.enterOpacity = '0';
      this.enterDisplay = 'none';
      this.headerTop = '26vh';
      this.currentState= 'hasEntered';
      this.currentHeaderPosition = 'topAligned';
      this.cloudBGState = 'shown';
      this.headerHideWidth = '0';
      this.currentPortraitState = 'pushed';
      this.descriptionState = 'shown';
      this.currentHeaderState = 'topAlignedWide';
      this.landingPointerEvents = 'all';
      this.videoZIndex = "-22";
      this.currentOpacityState = 'visible';
    }

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      console.log('mobile device detected');
    }




    this.homeNavOpacity = '1';
    this.homeNavDisplay = 'none';
    this.homeTransition = 'top 3s ease-in';
    this.homeNavTop = 'calc(100vh + 200px)';
  };






  coordinates(event): void  {

    if(window.innerWidth/2 > event.pageX) {
      this.transformValue = (window.innerWidth/2 - event.pageX)/(window.innerWidth/2);

      this.leftTextTransform = (this.transformValue * 8).toString()+'vh';
      this.rightTextTransform = (this.transformValue * -8).toString()+'vh';
      this.seanRotate =   (this.transformValue * -3).toString()+ 'deg';
      this.seanTranslate = (this.transformValue * -3).toString()+'%';
    } else {

      this.transformValue = (event.pageX - window.innerWidth/2 )/(window.innerWidth/2);
      this.leftTextTransform = (this.transformValue * -8).toString()+'vh';
      this.rightTextTransform = (this.transformValue * 8).toString()+'vh';
      this.seanRotate =   (this.transformValue * 9).toString()+'deg';
      this.seanTranslate = (this.transformValue * 4).toString()+'%';
    }
  }


  widenHeader(): void {
    if (this.currentHeaderPosition == 'topAligned' && this.playAnim != false) {
      this.currentHeaderState = 'topAlignedWide';
      this.currentPortraitState = 'visible';
      this.currentOpacityState = 'visible';
    }
  }


  topAlignHeader(): void {
    if(this.buildSwitch == true) {
      this.currentHeaderPosition = 'topAligned';
      this.currentState = 'hasEntered';
      this.videoDisplay = 'none';
    }
  }



  buildingAnimation(): void {
    console.log('ENTER BUILDINGS');
    this.buildingCount = 1;

    setTimeout(()=>{ this.animationStartToggle = true }, 600);

    if (this.animationStartToggle == true) {

      this.interval = setInterval(() => {
        switch(this.buildingCount) {
          case 1: {
              this.building1State = 'visible';
            this.buildingCount++;
            this.intervalAmount = 100;
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
           // console.log('working4', this.intervalAmount);
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

  buildingAnimation2(): void {
    //console.log('hiiiii!@@', this.building1State, this.animationStartToggle);
    this.buildingCount = 1;
    console.log('EXIT BUILDINGS');


    setTimeout(()=> {
      this.animationStartToggle = true
    }, 10);

    if (this.animationStartToggle == true) {
      // this.descriptionState = 'hidden';


      this.interval = setInterval(() => {
        switch (this.buildingCount) {
          case 1: {
            this.building3State = 'opaque';
            this.buildingCount++;
            this.intervalAmount = 100;
           // console.log('working', this.intervalAmount);
            break;
          }
          case 2: {
            this.building2State = 'opaque';
            this.buildingCount++;
           // console.log('working2', this.intervalAmount);
            break;
          }
          case 3: {
            this.building1State = 'opaque';

            this.buildingCount++;
          //  console.log('working3', this.intervalAmount);
            break;
          }
          case 4: {
            this.building4State = 'opaque';
            this.buildingCount++;
           // console.log('working4', this.intervalAmount);
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

  startAnim(): void {
    this.videoOpacity = "100";
    this.enterDisplay ='none';
    this.descriptionToggle = true;
    // this.animationStartToggle = true;
    this.headerToggle = true;
    // this.changeState('state2');

    if (this.videoPlay == false) {
      // this.videoPlayer.nativeElement.play();
      var promise = document.querySelector('video').play();

      if (promise !== undefined) {
        promise.catch(error => {
          // Auto-play was prevented
          // Show a UI element to let the user manually start playback
          console.log('fal;');
        }).then(() => {
          // Auto-play started
        });
      }
    } else  {
      this.videoPlayer.nativeElement.pause();
    }
  }



  onTimeUpdate(value) : void {
    var videoTime  = value.target.currentTime;
    if(videoTime > .9) {
      this.headerHideTransition = 'width 1.2s';
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
      //console.log(this.currentState, 'currentState');
      this.cloudBGState = 'shown';
     // console.log('ADSFASDFA',this.currentHeaderState);

      this.buildSwitch = true;
      //this.currentBuildState = 'built';
      this.landingPointerEvents = 'all';
    }
  }

  goToGit(): void {
    window.open('https://github.com/seanholahan', '_blank')
  }



  // s(): void {
  //   this.landingCount++;
  //   if (this.landingCount == 3) {
  //     //this.headerHideWidth = '20vw';
  //     this.currentHeaderHideState = 'shown';
  //   }
  //   if (this. landingCount == 14) {
  //   }
  // }
}


