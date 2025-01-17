import { Component, OnInit,Injectable, ViewChild } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import {SharedService}   from '../services/shared.service';
import { Observable } from 'rxjs/Observable';
import {
  animation,state, trigger, animateChild, group,
  transition, animate, style, query, AnimationTriggerMetadata
} from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms 500ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class NavigationComponent implements OnInit {
  isHome$: Observable<boolean>;



   router: any;
   toolBarDisplay: string;
  isHome: boolean;

  // toolBarDisplay: any;
  // @ViewChild('nav') nav: NavigationComponent;







  constructor(private _router: Router, private sharedService: SharedService) {//,public nav: NavbarService,
    this.router = _router;

    console.log("nav", this.router);


  }
  ngOnInit() {
    console.log(this.router.url,"heee");
  }

  ngAfterViewInit () {
    console.log(this.router.url,"url!")
    // if (this.router.url == '/home') {
    //   this.isHome = false;
    // }
  }

  navigate(link) {
    this.router.navigate([link]);
  }



  playAnimation(): void {
    this.sharedService.changeAnimationToggle(true);
  }

  doNotPlayAnimation(): void {

    this.sharedService.changeAnimationToggle(false);
  }

  goToGit() {
    window.open('https://github.com/seanholahan', '_blank')
  }

  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/sean-holahan-79269a122/', '_blank')
  }



}
