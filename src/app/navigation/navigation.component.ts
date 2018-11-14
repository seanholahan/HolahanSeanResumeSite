import { Component, OnInit,Injectable, ViewChild } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import {SharedService}   from '../services/shared.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isHome$: Observable<boolean>;



   router: any;
  // toolBarDisplay: any;
  // @ViewChild('nav') nav: NavigationComponent;







  constructor(private _router: Router, private sharedService: SharedService) {//,public nav: NavbarService,
    this.router = _router;
    // this.toolBarDisplay = 'block';

    console.log("nav", this.router.url);
    // if (this.router.url === '/') {
    //   console.log('ayo');
    //   this.isHome$ = Observable.of(false);;
    //   //this.toolBarDisplay = 'none';
    // }
    // // } else
    // // {
    // //   this.toolBarDisplay = 'block';
    // // }
    // if (this.router.url === '/animation') {
    //   console.log('geez');
    //  // this.toolBarDisplay = 'none';
    //   this.isHome$ = Observable.of(true);;
    // }

  }

  ngOnInit() {
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
