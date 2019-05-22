import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';

@Injectable()
export class TwitterService {
  constructor(private http: HttpClient) { 
      
  }
  config: Config;

  getDailyTweet() {
      console.log("twitter service")
      this.http.get("https://api.twitter.com/1.1/search/tweets.json?q=from%3ANasa%20OR%20%23nasa")
      .subscribe((data: Config) => this.config = { ...data },
      error => console.log("error"));
 
   }
  
    
  
}