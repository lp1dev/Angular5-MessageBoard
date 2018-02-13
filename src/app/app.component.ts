import { Component } from '@angular/core';
import { messages } from './messages/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Message board';
  messages = messages;
  hashtags = [];

  setHashtags(hashtags: string[]) {
    hashtags.forEach((hashtag) => this.hashtags.push(hashtag));
  }
}
