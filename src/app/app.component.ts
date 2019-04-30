import { Component, AfterViewInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {RouterOutlet, Router, NavigationStart, NavigationCancel, NavigationEnd,Resolve} from '@angular/router';
import {opacityAnimation} from './animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    opacityAnimation
  ]
})
export class AppComponent implements AfterViewInit {
  loading;
  public constructor(private titleService: Title, private router: Router ) {
    this.loading = true;
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationStart) {
          this.loading = true;
          console.log("startedloading");
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
          console.log("endLOAD");
        }
      });
  }
}


@Component({
  template: `
    <h1 matDialogTitle>This is a dialog</h1>
    <div matDialogContent>
      <mat-form-field>
        <label>
          This is a text box inside of a dialog.
          <input matInput #dialogInput>
        </label>
      </mat-form-field>
    </div>
    <div matDialogActions>
      <button mat-raised-button [matDialogClose]="dialogInput.value">CLOSE</button>
    </div>
  `,
})
export class DialogContentComponent {
  constructor() {

  }
}
