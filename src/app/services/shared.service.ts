import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  playAnim$: boolean;
  isHome$: boolean;


  constructor() {
  }

  changeAnimationToggle(bool) {
    this.playAnim$ = bool;
  }

  changeIsHomeToggle(bool) {
    this.isHome$ = !bool;
  }


}



