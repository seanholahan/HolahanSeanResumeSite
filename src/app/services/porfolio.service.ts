import { Injectable } from '@angular/core';
import {PORTFOLIO} from './portfolio-data';
import {Project} from './project'
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  portfolio$: Project[] = PORTFOLIO;

  getPortfolio(): Project[] {
    return PORTFOLIO;
  }
}
