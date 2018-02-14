import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserComponent],
  providers: [UsersService],
  exports: [UserComponent]
})
export class UsersModule { }
