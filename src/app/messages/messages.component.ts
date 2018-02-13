import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from './message';
import { MessagesService } from './messages.service';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Output() hashtagFound = new EventEmitter<string[]>();
  messages: Message[];
  class: 'shadowed';

  constructor(messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }

  ngOnInit() {
    this.parseHashtags();
  }

  parseHashtags() {
    const hashtags = [];

    this.messages.forEach((message) => {
      const regex = /#(\w+)/g;
      const matches = message.content.match(regex);
      matches.forEach((hashtag) => hashtags.push(hashtag));
    });
    this.hashtagFound.emit(hashtags);
  }

}
