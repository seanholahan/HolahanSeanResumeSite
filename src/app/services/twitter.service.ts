import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';

@Injectable()
export class TwitterService {
  constructor(private http: HttpClient) { 
      
  }
  tweets = ['"To live is the rarest thing in the world. Most people just exist." - Oscar Wilde',
                  '"Many of life’s failures are people who did not realize how close they were to success when they gave up." - Thomas Edison',
                '"Our lives begin to end the day we become silent about things that matter." - Martin Luther King Jr',
              '"We do not receive wisdom; we must discover it for ourselves after a journey that no one can take for us or spare us." - Marcel Proust',
            '"How can you come to know yourself? Never by thinking, always by doing. Try to do your duty, and you will know right away what you amount to." - Johann Wolfgang von Goethe',
          '"Either you deal with what is the reality or you can be sure that the reality is going to deal with you." - Alex Haley',
        '"Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day; begin it well..." - Ralph Waldo Emerson',
      '"You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you." - James Lane Allen',
    '"Nothing contributes so much to tranquilizing the mind as a steady purpose - a point on which the soul may fix its intellectual eye." - Mary Wollstonecraft Shelley']



  randomQuoteIndex() {
    return Math.floor( Math.random() * Math.floor(this.tweets.length))
  }          
  getDailyTweet() {
    return this.tweets[this.randomQuoteIndex()]
      
 
   }
  
    
  
}