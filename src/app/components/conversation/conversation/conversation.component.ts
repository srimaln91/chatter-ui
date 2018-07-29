import { Component, OnInit } from '@angular/core';
import { Conversation } from '../../../models/conversation';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  conversation: Conversation;

  constructor() { }

  ngOnInit() {
  }

}
