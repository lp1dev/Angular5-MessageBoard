import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  user = {
    login: '',
    password: '',
    color: '',
    avatar: ''
  };
  error: string;

  constructor(public usersService: UsersService, public router: Router) { }

  ngOnInit() {
  }

  subscribe() {
    this.usersService.addUser(this.user)
    .subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/login');
    }, (error) => {
      console.error(error);
      this.error = error.error.error;
    });
    console.log(this.user);
  }

}
