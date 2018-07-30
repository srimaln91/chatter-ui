import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ChatService } from '../../../services/chat-service/chat-service.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  @Output()
  selectedUser: EventEmitter<User> = new EventEmitter();

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getAllUsers()
    .then(users => {
      this.users = users;
    })
    .catch(err => {
      console.log(err);
    });
  }

  selectUser(user: User) {
    this.selectedUser.emit(user);
  }

}
