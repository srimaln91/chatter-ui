import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat-service/chat-service.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
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

}
