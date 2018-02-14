import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiConfig } from './config';

@Injectable()
export class RestService {

  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfig) {
  }

  loadMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiConfig.api_url + 'messages');
  }

  login(login: string, password: string): Observable<any[]> {
    return this.http.post<any>(this.apiConfig.api_url + 'login',
    {login: login, password: password});
  }
}
