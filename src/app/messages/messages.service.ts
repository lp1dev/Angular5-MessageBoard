import { Injectable } from '@angular/core';
import { Message } from './message';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../shared/rest.service';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];
  private messagesSubject = new Subject<Message[]>();

  constructor(private restService: RestService) {
  }

  loadMessages(): void {
    this.restService.loadMessages()
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
