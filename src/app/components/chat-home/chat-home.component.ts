import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service/chat-service.service';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {

  constructor(private chatService: ChatService) { }
  public message: String = '';
  public messages = [];

  ngOnInit() {
    this.chatService.getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
  }

}
