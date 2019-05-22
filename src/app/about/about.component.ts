import { Component, OnInit, ViewChild, Input,Injectable,AfterViewInit, HostListener} from '@angular/core';
import{trigger, style, transition, animate,  state} from '@angular/animations';
import {buildingAnimation} from '../animations';
import {SharedService}   from '../services/shared.service';
import {Subscription} from 'rxjs/Subscription';
import { Observable} from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [
    buildingAnimation('building1'),
    buildingAnimation('building2'),
    buildingAnimation('building3'),
    buildingAnimation('building4'),

    //for home navigation
    trigger('enterSite', [
      state('notEntered', style({
        transform: 'translateY(60px)'
      })),
      state('hasEntered', style({
        transform: 'translateY(0px)'
      })),
      transition('*=>hasEntered', animate('300ms'))
    ]),

    //for cloud background
    trigger('cloudBG', [
      state('hidden', style({
        zIndex: '-11',
        opacity: 0
      })),
      state('shown', style({
        zIndex: '-11',
        opacity: .7
      })),
      transition('hidden <=> shown',  animate('1500ms')),

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
      })),
      state('pushed', style({
        borderRadius: "0px 0px 0px 0px",
        transform: 'scaleX(1)'
      })),
      transition('hidden <=> visible', animate('200ms 300ms')),
      transition('visible <=> pushed', animate('500ms 300ms'))
    ]),
    trigger('headerState', [
      state('centerAligned', style({
        textShadow: 'none',
        letterSpacing: '0'
      })),
      state('topAligned', style({
        letterSpacing: '0'
      })),
      state('topAlignedWide', style({
        textShadow: '2px 2px orange',
        letterSpacing: '2.5vw'
      })),
      transition('topAligned <=> centerAligned',  animate('300ms')),
      transition('topAligned <=> topAlignedWide',  animate('300ms 200ms')),
      transition('centerAligned <=> topAlignedWide',  animate('200ms 300ms')),
    ]),
    trigger('headerPosition', [
      state('middle', style({
        height: '80vh' 
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
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,AfterViewInit {
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
  @Input() cloudBGState: string = 'hidden';
  @Input() currentHeaderPosition: string = "middle";
  @Input() currentOpacityState: string = 'hidden';
  @HostListener("window:scroll", ['event'])
  onWindowScroll(event) {
   this.startAnim();
  }
      


  interval;
  event: MouseEvent;
  movementX:number = 0;

  //pointer events
  landingPointerEvents: string = 'none';

  //window size
  innerHeight: string;
  innerWidth: string;
  mediaQuery$: Subscription;
  activeMediaQuery: string;

  //mobile detection
  iconMarginBottom: string = '0';

  //scroll variables
  scrollIconOpacity: string = 'flex';

  //intro animation variables
  headerHideTransition: string = 'width 0s';
  headerHideDisplay: string = 'block';
  landingBackgroundColor: string = '#6E9EC1';
  enterState: string = 'notEntered';
  descriptionToggle: boolean = false;
  headerToggle: boolean = false;
  buildSwitch: boolean = false;
  enterOpacity:string = '0';
  enterDisplay: string = 'block';
  videoOpacity: string =  '100';
  videoDisplay: string = 'block';
  videoZIndex: string;
  headerTop : string = '26vh';
  homeNavOpacity: string;
  homeNavDisplay:string;
  homeNavTop:string;
  homeTransition:string;
  leftTextTransform: string = '0';
  rightTextTransform: string = '0';
  seanTranslate: string = '0';
  seanRotate: string = '0';
  transformValue: number = 0;
  videoPlay: boolean = false;
  aboutToggle: Observable<number>;
  playAnim: boolean;
  headerHideWidth:string;
  onSafari:boolean;


  vid = document.getElementById('video-background');



  constructor(
    private sharedService: SharedService,
    private observableMedia: ObservableMedia
    
  ) {
    this.playAnim = true;

  }


  

  enterSite(state: any) {
    this.enterState = state;
  }

  ngAfterViewInit () {
    
    this.mediaQuery$ = this.observableMedia.subscribe( (change: MediaChange) => {
      this.activeMediaQuery = `${change.mqAlias}`;
      if (this.activeMediaQuery === 'xs') {
        //do something for small screens...ie change template
      } else {
        //else
      }
    });




  }


  ngOnInit() {
    
    


    if (navigator.userAgent.toLowerCase().indexOf('safari') != -1) {
      if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        this.onSafari = false;

      } else {
        this.onSafari = true;
        alert("For the full experience, please visit this site on Chrome or Firefox");
      }
    }

    // this.playAnim = this.sharedService.playAnim$;
    // this.playAnim == false || 
    if (this.onSafari == true) {
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

    this.innerHeight = (window.screen.height) + "px";
    this.innerWidth = (window.screen.width) + "px";

    




    //toggle to turn off intro animation

    //check for mobile
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.iconMarginBottom = '-1';
    }

    // if( /Safari/i.test(navigator.userAgent) ) {
    // //  alert(" this is safiarei");
    //   this.playAnim = false;
    // }
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

  startAnim(): void {
    this.scrollIconOpacity = 'none';
    this.descriptionToggle = true;
    this.headerToggle = true;
    var promise = <HTMLAudioElement> document.getElementById('video-background');
    if (this.videoPlay == false) {
     promise.play();
    } else {
      promise.play();
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
      console.log("got to the end")
      this.headerHideWidth = '0';
      this.headerHideTransition = 'width 0s';
      this.headerHideDisplay = 'none';
      this.homeNavDisplay = 'block';
      this.homeNavOpacity = '100';
      this.homeTransition = 'top 3s ease-in';
      this.cloudBGState = 'shown';
      this.buildSwitch = true;
      this.landingPointerEvents = 'all';
    }
  }

  goToGit(): void {
    window.open('https://github.com/seanholahan', '_blank')
  }
}
