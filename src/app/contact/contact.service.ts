
/**
 * Created by seanHolahan on 11/4/18.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export interface IMessage {
  name?: string,
  email?: string,
  message?: string
}


@Injectable()
export class ContactService {
  private emailUrl = 'http://www.seanholahan.com/emailForm.php';

  constructor(private http: HttpClient) {

  }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message, {
      responseType: 'text',
    })
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch((error: Error) => {
        console.log('Sending email got error', error.message);
        return Observable.throw(error.message);
      });
    // .catch(error => {
    //   console.log('Sending email got error', error);
    //   return Observable.throw(error)
    // })
  }
}
