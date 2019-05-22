import { Injectable } from '@angular/core';
import {PORTFOLIO} from './portfolio-data';
import {Project} from './project';
import GoogleSpreadsheet from 'google-spreadsheet';

@Injectable({
  providedIn: 'root'
})


export class PortfolioService {

  constructor() { 
  //   let doc = new GoogleSpreadsheet('1ly1JQ6-HjSqt23TkVOnR_K8PTxrSRnbfx8WOmx0deR4');
  // doc.useServiceAccountAuth(creds, function (err) {

 

  //   // Get all of the rows from the spreadsheet.
  
  //   doc.getRows(1, function (err, rows) {
  
  //     console.log("grows",rows);
  
  //   });
  
  // });
    
  }

  

  portfolio$: Project[] = PORTFOLIO;

  getPortfolio(): Project[] {
    return PORTFOLIO;
  }
}


