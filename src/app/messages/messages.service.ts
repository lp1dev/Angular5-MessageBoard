import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message';
import { config } from '../shared/config';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];
  private messagesSubject = new Subject<Message[]>();

  constructor(private http: HttpClient) {
  }

  loadMessages(): void {
    this.http
    .get<Message[]>(config.api_url + 'messages')
    .subscribe((messages) => {
      if (messages !== this.messages) {
        this.messages = messages;
        this.messagesSubject.next(messages);
      }
    });
  }

  getMessagesObservable() {
   if (!this.messages.length) {
     this.loadMessages();
   }
   return this.messagesSubject.asObservable();
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }
}
