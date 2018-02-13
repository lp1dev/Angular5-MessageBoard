import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessageComponent } from './message/message.component';
import { HashtagAreaComponent } from './hashtag-area/hashtag-area.component';
import { HashtagsPipe } from './hashtags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageInputComponent,
    MessageComponent,
    HashtagAreaComponent,
    HashtagsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
