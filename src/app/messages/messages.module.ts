import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessageComponent } from './message/message.component';
import { HashtagAreaComponent } from './hashtag-area/hashtag-area.component';
import { HashtagsPipe } from './hashtags.pipe';
import { MessagesService } from './messages.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    MessagesComponent,
    MessageInputComponent,
    MessageComponent,
    HashtagAreaComponent,
    HashtagsPipe
  ],
  providers: [MessagesService],
  exports: [MessagesComponent, HashtagAreaComponent, MessageInputComponent]
})
export class MessagesModule { }
