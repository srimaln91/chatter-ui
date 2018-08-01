import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import {User} from '../../models/user';
import { UserService } from '../../services/user-service/user.service';
import { Observable } from 'rxjs';
import { Conversation } from '../../models/conversation';
import { Message } from '../../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = environment.apiEndpoint;
  private socket;
  private apiBase = environment.apiEndpoint;
  private requestOptions: RequestOptions;

  constructor(private http: Http, private userService: UserService) {
    this.socket = io(this.url);

    const user = this.userService.getLocalUser();
    const t = this.socket.emit('userid', user._id);

    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    this.requestOptions = new RequestOptions({headers: headers});

  }

  public sendMessage(message: Message) {
    // const user = this.userService.getLocalUser();
    // const t = this.socket.emit(message);
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
  }

  public getAllUsers(): Promise<User[]> {
    return this.http.get(this.apiBase + '/user', this.requestOptions)
    .toPromise()
    .then(res => {
      return res.json() as User[];
    })
    .catch(this.handleError);
  }

  public createConversation(users: String[]): Promise<Conversation> {
    return this.http.post(this.apiBase + '/conversation', {users: users}, this.requestOptions)
    .toPromise()
    .then(conversation => {
      return conversation.json().conversation as Conversation;
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
