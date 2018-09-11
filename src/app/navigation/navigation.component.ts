import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { NavigationService } from './navigation.service';
import { Observable } from 'rxjs/Observable';



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



  constructor(private _router: Router) {//,public nav: NavbarService,
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

}
