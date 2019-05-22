import { Component, OnInit, ViewChild, Input,Injectable,AfterViewInit} from '@angular/core';
import{trigger, style, transition, animate,  state} from '@angular/animations';
import {buildingAnimation} from '../animations';
import {SharedService}   from '../services/shared.service';
import {TwitterService} from '../services/twitter.service';

import {Subscription} from 'rxjs/Subscription';
import { Observable} from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
  
  ],

  styleUrls: ['./home.component.scss']

})

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
  data: string = '"Look not mournfully into the past. It comes not back again. Wisely improve the present. It is thine. Go forth to meet the shadowy future, without fear." - Henry Wadsworth Longfellow';
  quote: string; 
  author: string;




  constructor(
    private sharedService: SharedService,
    private twitterService: TwitterService,
    private observableMedia: ObservableMedia
    
  ) {

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
    console.log("inited");
    this.twitterService.getDailyTweet();
    this.quote = this.data.match(/"([^"]*)"/)[0];
    this.author = this.data.replace(this.quote, "");
    this.innerHeight = (window.screen.height) + "px";
    this.innerWidth = (window.screen.width) + "px";

    //toggle to turn off intro animation

    //check for mobile
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.iconMarginBottom = '-1';
    }
  }

    // if( /Safari/i.test(navigator.userAgent) ) {
    // //  alert(" this is safiarei");
    //   this.playAnim = false;
    // }


  goToGit(): void {
    window.open('https://github.com/seanholahan', '_blank')
  }
}
