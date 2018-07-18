import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import "gsap";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class AnimationComponent implements OnInit {



  videoList = [{
    id: "1",
    embed: '92SfnUlgupQ'
  },
    {
      id: "2",
      embed: 'AqhUISrJ9Wk'
    }
  ];






  constructor() {

  }

  event: MouseEvent;
  clientX = 0;
  clientY = 0;
  movementX = 0;
  pantViewPosition=0;
  positionValue = 1;
  row1 = true;
  row2 = false;
  top = '0vh';
  left = '0vh';
  position = '500px 500px';
  image = "../../assets/img/skate2.png";
  article = 1;
  pant:any;
  isDown = false;

  ngOnInit() {
    // console.log("hi", this.top);
  }





  onJamSeshHover(event: MouseEvent): void {
    this.event = event;
    if (this.event.type == 'mouseleave') {
     // console.log("left");

    }
    if (this.event.type == 'mouseenter') {
    //  console.log("enter");

      }
    }

    mouseDrag(event: MouseEvent):void {
      this.event = event;
   //   console.log(event, "goon!!!");
      this.clientX = event.clientX;
      this.clientY = event.clientY;
      this.movementX = event.movementX;



    }

    getPantView(pantPos:number ) {


      if (pantPos > 112) {
        return pantPos - (112 * Math.floor(pantPos/112));
      } else {
        // console.log("pant pos", pantPos);
        return pantPos;
      }

    }

    down(event: MouseEvent)  {
      this.isDown = true;
      console.log("down");
}

    up(event: MouseEvent) {
      this.isDown = false;

    }

  coordinates(event: MouseEvent): void {
    this.pantViewPosition = event.clientX-7;
    this.positionValue = event.clientX-7;



    this.pantViewPosition = this.getPantView(this.positionValue);
    // console.log("pant pos", this.pantViewPosition);

    // this.clientX = event.clientX;
    // this.clientY = event.clientY;
    // this.top = String(event.clientY*473) + 'px';
    if (this.pantViewPosition <= 16) {
      this.left = String('-' + (this.pantViewPosition) * 34.66) + 'vh';
      this.top = "0vh";
      this.pantViewPosition = event.clientX - 7;
    }
    else if ( this.pantViewPosition > 96) {
      // console.log("2");
      this.left = String('-' + (this.pantViewPosition - 96) * 34.66) + 'vh';
      this.top = '-378.4vh';
    }


    else if ( this.pantViewPosition > 80) {
      this.left = String('-' + (this.pantViewPosition - 80) * 34.66) + 'vh';
      this.top = '-315.3vh';
    }

    else if ( this.pantViewPosition > 64) {
      this.left = String('-' + (this.pantViewPosition - 64) * 34.66) + 'vh';
      this.top = '-252.2vh';
    }

    else if ( this.pantViewPosition > 48) {
      this.left = String('-' + (this.pantViewPosition - 48) * 34.66) + 'vh';
      this.top = '-189.1vh';
    }

    else if ( this.pantViewPosition > 32) {
      this.left = String('-' + (this.pantViewPosition - 32) * 34.66) + 'vh';
      this.top = '-126vh';
    }
      else if ( this.pantViewPosition > 16) {
      this.left = String('-' + (this.pantViewPosition - 16) * 34.66) + 'vh';
      this.top = '-63vh';
      this.row2 = true;
    }
    // console.log(this.top,"left", this.left,"x", event.clientX, this.pantViewPosition);



  }




  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2';
  }
}


//   // use a dummy element as the target since we don't really need anything visual to drag around
//   var spriteslider = document.createElement('div');
// // the dummy element needs to be added to the DOM in latest Draggable
//   document.body.appendChild(spriteslider);
//
// // attach all vars to the dummy element so globals aren't needed:
// // element that initiates dragging
//   this.spriteslider.slider = document.getElementById('spriteslider');
// // element with the sprite sheet to control
//   spriteslider.sprite = document.getElementById('spritetarget');
// size of each sprite frame
 // spriteslider.spritesize = 128;
// number of sprite frames - used to keep multiplier in a reasonable range
 // spriteslider.spritecount = 20;
// pixels to drag per sprite update
 // spriteslider.pixelsperincrement = 25;
// values used by the sprite changer
//   spriteslider.multiplier = spriteslider.lastmultiplier = 0;


// // create the 360 degree slider
//   Draggable.create(spriteslider, {
//   type: 'x',
//   trigger: spriteslider.slider,
//   // reset the targets position after drag ends, so onDrag doesn't need to deal with an offset
//   bounds: { minX:0, maxX:0, minY:0, maxY:0 },
//   // don't need to slow down as you drag further away
//   edgeResistance: 0,
//   cursor: 'e-resize',
//   onDrag: function() {
  // there is an extra drag event fired on mouse up that has x = 0, so check this.isDragging to skip that last one
//   if (this.isDragging) {
//     var t = this.target; // the dummy div
//     t.multiplier = Math.floor(this.x / t.pixelsperincrement) + t.lastmultiplier;
//     TweenLite.set(t.sprite, { backgroundPosition: (-t.multiplier * t.spritesize) + "px 0"});
//   }
// },
//   onDragEnd: function()	{
//   // saves the current multiplier, and keeps multiplier small so that backgroundPosition doesn't end up too large for the browser to render
//   var t = this.target; // the dummy div
//   t.lastmultiplier = t.multiplier % t.spritecount;
// }
// });
// }




