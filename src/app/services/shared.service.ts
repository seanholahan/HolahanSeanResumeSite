import { Injectable} from '@angular/core';

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



