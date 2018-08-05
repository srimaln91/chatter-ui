import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Conversation } from '../../../models/conversation';
import { User } from '../../../models/user';
import { ChatService } from '../../../services/chat-service/chat-service.service';
import { UserService } from '../../../services/user-service/user.service';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, OnChanges {

  @Input()
  conversation: Conversation;

  @Input()
  user: User;

  newMessage: Message;

  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnInit() {

    this.chatService.getMessages()
    .subscribe((message: Message) => {
      console.log(message);
      this.conversation.messages.push(message);
    });

    const newMessage = new Message();
    newMessage.conversation = this.conversation._id;
    newMessage.from = this.user;
    newMessage.message_body = '';
    newMessage.created_at = new Date();
    this.newMessage = newMessage;

    this.setRoom();

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['conversation']) {

      const newMessage = new Message();
      newMessage.conversation = this.conversation._id;
      newMessage.from = this.user;
      newMessage.message_body = '';
      newMessage.created_at = new Date();
      this.newMessage = newMessage;

      this.setRoom();
      // console.log(this.user);
    }
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage.message_body = '';
  }

  setRoom() {
    this.chatService.changeRoom(this.conversation);
  }
}
