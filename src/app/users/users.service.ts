import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../shared/rest.service';

@Injectable()
export class UsersService {

  constructor(public restService: RestService) { }

  login(login: string, password: string): Observable<any> {
    return this.restService.login(login, password);
  }

}
