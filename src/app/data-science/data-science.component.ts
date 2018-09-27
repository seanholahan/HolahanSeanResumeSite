import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../app-animations/index';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data-science',
  templateUrl: 'data-science.component.html',
  styleUrls: ['data-science.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' },
})
export class DataScienceComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Sean Holahan: Data Science');
  }

  ngOnInit() {
    console.log('hello from data science');
  }

}
