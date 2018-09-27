import { Component, Optional } from '@angular/core';
import {Title} from '@angular/platform-browser'

import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public constructor(private titleService: Title ) { }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
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
