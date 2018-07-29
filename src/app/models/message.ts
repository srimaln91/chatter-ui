import { User } from '../models/user';

export class Message {
  conversation: String;
  user: User;
  message_body: String;
  message_status: Boolean;
  created_at: Date;
}
