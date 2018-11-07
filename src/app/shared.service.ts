import { Injectable} from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  playAnim$: boolean;

  constructor() {
  }

  changeAnimationToggle(bool) {
    this.playAnim$ = bool;
  }
}



