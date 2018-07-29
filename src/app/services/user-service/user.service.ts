import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBase = environment.apiEndpoint + '/user';
  private requestOptions: RequestOptions;

  constructor(private http: Http) {

    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    this.requestOptions = new RequestOptions({headers: headers});

  }

  createUser(user: User): Promise<User> {
    return this.http.post(this.apiBase + '/registration', user, this.requestOptions)
      .toPromise()
      .then(res => {
        return res.json() as User;
      })
      .catch(this.handleError);
  }

  loginUser(loginData: any) {
    return this.http.post(this.apiBase + '/login', loginData, this.requestOptions)
    .toPromise()
    .then(resp => {
      const loginResp = resp.json();
      if (loginResp.success === true) {
        const user = new User();
        user._id = loginResp.user._id;
        user.name = loginResp.user.name;
        user.email = loginResp.user.email;
        user.authToken = loginResp.authToken;

        this.setLocalUser(user);
        return user;
      } else {
        return false;
      }
    })
    .catch(this.handleError);
  }

  setLocalUser(user: User) {
    return localStorage.setItem('user', JSON.stringify(user));
  }

  getLocalUser() {
    const user = localStorage.getItem('user');
    if (user !== null) {
      return JSON.parse(user);
    }
    return false;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
