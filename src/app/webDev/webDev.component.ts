
import { Component, OnInit,Injectable,NgModule, ViewChild, Input,Pipe, PipeTransform } from '@angular/core';
//import {Http} from '@angular/http';
import{trigger, style, transition, animate,  state, query, useAnimation} from '@angular/animations';
import {descriptionAnimation} from '../animations';
import { PORTFOLIO } from '../portfolio/portfolio-data';
import {Project} from '../portfolio/project';

import {OverlayContainer} from '@angular/cdk/overlay';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import {SharedService}   from '../shared.service';
import {Subscription} from 'rxjs/Subscription';
import * as Rx from "rxjs";
// @NgModule({
//   providers: [SharedService]
// })


@Injectable({
  providedIn: 'root',
})

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
    //TODO: MAKE ENTERSITE:HOVER --> YELLOW INSTEAD OF BLACK

  ],
  templateUrl: 'portfolio.component.html',
  styleUrls: ['./webDev.component.scss']
})

@Pipe({
  name: 'unique',
  pure: false
})

export class WebDevComponent implements OnInit {
  portfolio = PORTFOLIO;
  portfolioDisplay = PORTFOLIO;
  //projectTypes = PORTFOLIO;

  subscription: Subscription;

  @Input() stitchHoverState: string = 'idle';
  @Input() jamSeshHoverState: string = 'idle';
  @Input() stitchDescriptionState: string = 'hidden';
  projects:Object[];
  selectedType: string;
  event: MouseEvent;
  lookup = {};
  // result: string[] = new Array;
  result = [];
  projectTypes: string[] = ["All Categories"];
  uniqueProjectTypes: string[] = [];
   pt: any[] = Array.of(this.portfolio);
  public cols: Observable<number>;

  introAnimationView: boolean;





  constructor( private observableMedia: ObservableMedia, private sharedService: SharedService) {
    // this.sharedService.playAnimationToggle.subscribe((playAnimationToggle) => {
    //   console.log(playAnimationToggle, 'val');
    // })
  }

  ngOnInit() {
  // private http:Http
    // this.http.get('data.json').subscribe(res => {
    //   this.projects = res.json();
    // })
    this.makeCategories();






    this.introAnimationView = false;
    console.log('playAnimationTogglewebdev',this.sharedService);

    const grid = new Map([
      ["xs", 1],
      ["sm", 2],
      ["md", 2],
      ["lg", 2],
      ["xl", 2]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        console.log(change);
        console.log(grid.get(change.mqAlias));
        return grid.get(change.mqAlias);
      })
      .startWith(start);

  }

  makeCategories(): void {



    //this.portfolio = res.json().results;

     //console.log(this.pt[0]);
    for (let i in this.pt[0]) {
      this.projectTypes.push(this.pt[0][i].type);
     //console.log(this.pt[0][i].type);
    }

    this.uniqueProjectTypes = this.projectTypes.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });

    //console.log('!!',this.projectTypes, this.uniqueProjectTypes);

    }


  openProject(url) {
    window.open(url, '_blank')
  }

  onSelect(selected) {
      //console.log(this.portfolio);
    if (selected == "All Categories") {
      this.portfolioDisplay = this.portfolio;

    } else {
      this.portfolioDisplay = this.portfolio.filter(project => project.type == selected);
    }

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
