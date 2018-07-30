import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service/chat-service.service';
import { User } from '../../models/user';
import { Conversation } from '../../models/conversation';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {

  selectedUser: User;
  loggedInUser: User;
  conversation: Conversation;
  message: String;

  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnInit() {
    this.loggedInUser = this.userService.getLocalUser();
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
  }

  setUser(user: User) {
    this.selectedUser = user;
    this.chatService.createConversation([this.selectedUser._id, this.loggedInUser._id])
    .then(conversation => {
      this.conversation = conversation;
      console.log(this.conversation);
    })
    .catch(err => {
      console.log(err);
    });

    this.selectedUser = user;
  }

}
