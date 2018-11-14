import { Component, OnInit,Injectable,NgModule, ViewChild, Input,Pipe, PipeTransform } from '@angular/core';
//import {Http} from '@angular/http';
import{trigger, style, transition, animate,  state, query, useAnimation} from '@angular/animations';
import {descriptionAnimation} from '../animations';
import { PORTFOLIO } from '../portfolio/portfolio-data';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import {SharedService}   from '../services/shared.service';
import {PortfolioService} from '../services/portfolio.service';
import {Subscription} from 'rxjs/Subscription';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Injectable({
  providedIn: 'root',
})



@Component({
  selector: 'app-portfolio',
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
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

@Pipe({
  name: 'unique',
  pure: false
})


export class PortfolioComponent implements OnInit {
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
  button1Display: string = 'block';
  button2Display: string = 'block';
  projectTypes: string[] = ["All Categories"];
  uniqueProjectTypes: string[] = [];
  pt: any[] = Array.of(this.portfolio);
  public cols: Observable<number>;
  introAnimationView: boolean;



  constructor(private observableMedia: ObservableMedia, private sharedService: SharedService,public dialog: MatDialog) { }

  ngOnInit() {
    this.makeCategories();






    this.introAnimationView = false;
    console.log('playAnimationTogglewebdev',this.sharedService);

    const grid = new Map([
      ["xs", 1],
      ["sm", 1],
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
        return grid.get(change.mqAlias);
      })
  }

  makeCategories(): void {
    for (let i in this.pt[0]) {
      this.projectTypes = this.projectTypes.concat(this.pt[0][i].type);
    }
    this.uniqueProjectTypes = this.projectTypes.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });
  }


  openProject(url) {
    window.open(url, '_blank')
  }

  onSelect(selected) {
    //console.log(this.portfolio);
    if (selected == "All Categories") {
      this.portfolioDisplay = this.portfolio;

    } else {
      this.portfolioDisplay = this.portfolio.filter(project => project.type.includes(selected));
     // this.portfolioDisplay = this.portfolio.filter(project => project.type  == selected  );
    }

  }

  openModal(modalType, modalData): void {
    let dataBundle = [modalType,modalData];
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '90vw',
      height: '90vh',
      data: {
        dataKey: dataBundle,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }



}






