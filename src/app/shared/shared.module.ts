import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { ApiConfig } from './config';
import { WebSocketService } from './web-socket.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [RestService, ApiConfig, WebSocketService]
})
export class SharedModule { }
