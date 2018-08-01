import { User } from '../models/user';

export class Message {
  conversation: String;
  from: User;
  message_body: String;
  message_status: Boolean;
  created_at: Date;
}
