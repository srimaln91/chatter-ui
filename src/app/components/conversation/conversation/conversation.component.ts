import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Conversation } from '../../../models/conversation';
import { User } from '../../../models/user';
import { ChatService } from '../../../services/chat-service/chat-service.service';
import { UserService } from '../../../services/user-service/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, OnChanges {

  @Input()
  conversation: Conversation;

  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnInit() {

    // this.chatService.getMessages()
    // .subscribe((message: string) => {
    //   this.messages.push(message);
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {


      // console.log(this.user);
    }
  }
}
