import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ChatHomeComponent } from './components/chat-home/chat-home.component';
import { ChatService } from './services/chat-service/chat-service.service';
import { ConversationComponent } from './components/conversation/conversation/conversation.component';
import { UserListComponent } from './components/user-list/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ChatHomeComponent,
    ConversationComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
