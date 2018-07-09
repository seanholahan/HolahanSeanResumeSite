import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})



export class AnimationComponent implements OnInit {
  videoList = [{
    id:"1",
    embed: '92SfnUlgupQ'
  },
    {
      id:"2",
      embed: '92SfnUlgupQ'
    }
  ];

  constructor() {}

  ngOnInit() {
  }
  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2';
  }

}
