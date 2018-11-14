import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // videoList = [{
  //   id: "1",
  //   embed: '92SfnUlgupQ'
  // },
  //   {
  //     id: "2",
  //     embed: 'AqhUISrJ9Wk'
  //   }
  // ];



  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  photoView: boolean = false;
  videoView: boolean = false;
  modelView:boolean = false;
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
  initialX = 0;
  positionFromDown = 0;
  modalData: Array<String>;

  ngOnInit() {
    console.log(this.data,"modalType1!");
    console.log(this.data.dataKey[0],"modalType1!");
    let modalType = this.data.dataKey[0];
    this.modalData = this.data.dataKey[1];

    if (modalType == "photo") {
      this.photoView = true;
      this.videoView = false;
      this.modelView = false;
    } else if (modalType == "video") {
      this.photoView = false;
      this.videoView = true;
      this.modelView = false;
    } else if (modalType == "modelView") {
      this.photoView = false;
      this.videoView = false;
      this.modelView = true;
    }

  }



  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item + '?ecver=2';
  }

  getPantView(pantPos:number ) {
    if (pantPos > 112) {
      return pantPos - (112 * Math.floor(pantPos/112));
    } else if (pantPos < 0) {
      console.log(pantPos - (112 * Math.floor(pantPos/112)));
      return pantPos - (112 * Math.floor(pantPos/112));
    } else {
      // console.log("pant pos", pantPos);
      return pantPos;
    }

  }

  down(event: MouseEvent)  {
    this.isDown = true;
    this.initialX = event.clientX;

  }

  up(event: MouseEvent) {
    this.isDown = false;

  }

  coordinates(event: MouseEvent): void {
    this.pantViewPosition = event.clientX-7;
    this.positionValue = event.clientX-7;


    if (this.isDown == true) {
      this.positionFromDown = this.getPantView(this.initialX - event.clientX);
    }

    this.pantViewPosition = this.positionFromDown;

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





}
