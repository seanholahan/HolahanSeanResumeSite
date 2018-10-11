
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import{trigger, style, transition, animate,  state, query, useAnimation} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {homeNavSlideAnim} from '../animations';
import { interval, timer } from 'rxjs';
import { map } from 'rxjs/operators'
import {descriptionAnimation} from '../animations';

@Component({
  selector: 'app-webDev',
  animations: [
    descriptionAnimation('stitchDescriptionHover','#ddbc42c7', '#ddbc42c7'),
    descriptionAnimation('jamSeshDescriptionHover', '#dd6e42c2','#dd6e42c2'),
    // descriptionAnimation('stitchDescriptionHover','#ddbc42c7', '#ddbc42'),
    // descriptionAnimation('jamSeshDescriptionHover', '#dd6e42c2','#DD6E42'),

    trigger('titleHover', [
      state('active', style({
        bottom: '16%'
      })),
      state('idle', style({
        bottom: '0'
      })),
      transition('idle <=> active', animate('500ms 500ms'))
    ]),

    trigger('descriptionHover', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', animate('500ms 500ms'))
    ]),



    // trigger('stitchDescriptionHover', [
    //   state('active', style({
    //
    //     clipPath: 'polygon(0 78%, 100% 62.5%, 100% 100%, 0 100%)',
    //     backgroundColor: '#ddbc42'//'#ddbc42c7'//
    //
    //
    //   })),
    //   state('idle', style({
    //     clipPath: 'polygon(0px 85%, 100% 85%, 100% 100%, 0px 100%)',
    //     backgroundColor: '#ddbc42c7'
    //   })),
    //   transition('idle <=> active', animate('100ms'))
    // ]),


    //TODO: MAKE ENTERSITE:HOVER --> YELLOW INSTEAD OF BLACK

  ],
  templateUrl: './webDev.component.html',
  styleUrls: ['./webDev.component.scss']
})
export class WebDevComponent implements OnInit {
  @Input() stitchHoverState: string = 'idle';
  @Input() jamSeshHoverState: string = 'idle';
  @Input() stitchDescriptionState: string = 'hidden';


  event: MouseEvent;



  constructor() {

  }

  ngOnInit() {

  }

  stitchHover(event: MouseEvent): void {
    this.event = event;
    if (this.event.type == 'mouseleave') {
      console.log('left');
      this.stitchHoverState = 'idle';
      this.stitchDescriptionState = 'hidden';
    }


    if (this.event.type == 'mouseenter') {
      this.stitchHoverState = 'active';
      this.stitchDescriptionState = 'visible';
      console.log('enter');
    }

  }

  jamSeshHover(event: MouseEvent): void {
    this.event = event;
    if (this.event.type == 'mouseleave') {
      console.log('left');
      this.jamSeshHoverState = 'idle';
    }


    if (this.event.type == 'mouseenter') {
      this.jamSeshHoverState = 'active';
      console.log('enter');
    }

  }


}
