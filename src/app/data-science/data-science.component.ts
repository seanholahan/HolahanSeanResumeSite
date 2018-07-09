import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../app-animations/index';

@Component({
  selector: 'app-data-science',
  templateUrl: 'data-science.component.html',
  styleUrls: ['data-science.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' },
})
export class DataScienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hello from data science');
  }

}
