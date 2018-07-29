import { User } from '../models/user';
import { Message } from '../models/message';

export class Conversation {
  name: String;
  topic: String;
  users: User[];
  messages: Message[];
  created_at: Date;
  updated_at: Date;
  is_group: Boolean;
}
