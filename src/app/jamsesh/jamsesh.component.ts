import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jamsesh',
  templateUrl: './jamsesh.component.html',
  styleUrls: ['./jamsesh.component.scss']
})
export class JamseshComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle('Sean Holahan: Jamsesh');
  }

  ngOnInit() {
  }

}
