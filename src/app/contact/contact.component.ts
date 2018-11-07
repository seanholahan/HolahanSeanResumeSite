import { Component, OnInit } from '@angular/core';
import { Router }          from '@angular/router';
import {contactForm} from './contactForm';
import { HttpClient } from '@angular/common/http';
import { ContactService, IMessage } from './contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private contactService: ContactService, private router: Router) { }
  mod=new contactForm("hi","sean@sean.com","hi sean");

  clientMessage = new contactForm("","","");

  submitted = false;

  onSubmit() { this.submitted = true; }


  ngOnInit() {
  }




  newMessage() {
    this.contactService.sendEmail(this.clientMessage).subscribe(res => {
      console.log('AppComponent Success', res);
      this.router.navigate(['/resume']);
      // alert("Thanks for the message! you will be attached as a recipient to this message.");
    }, error => {
      this.router.navigate(['/contactConfirm']);
      //alert("Something went wrong! Please make sure to fill out all fields and provide a valid email");
      console.log('AppComponent Error', error);
    })



  }

  get diagnostic() { return JSON.stringify(this.clientMessage); }

  // formUpload(event) {
  //   let element =
  // }
}



