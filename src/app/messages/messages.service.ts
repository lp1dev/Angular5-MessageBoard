import { Injectable } from '@angular/core';
import { Message } from './message';
import { messages } from './mock';

@Injectable()
export class MessagesService {
  messages: Message[];

  constructor() {
    this.messages = messages;
  }

  getMessages() {
    return this.messages;
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }
}
