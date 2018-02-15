import { Component } from '@angular/core';
import { messages } from './messages/mock';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Message board';
  messages = messages;
  hashtags = [];

  constructor(public usersService: UsersService) {
  }


  setHashtags(hashtags: string[]) {
    hashtags.forEach((hashtag) => this.hashtags.push(hashtag));
  }
}
