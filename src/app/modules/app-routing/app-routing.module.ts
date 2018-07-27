import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRegistrationComponent } from '../../components/user-registration/user-registration.component';
import { UserLoginComponent } from '../../components/user-login/user-login.component';
import { ChatHomeComponent } from '../../components/chat-home/chat-home.component';
import { UserLoginGuard } from '../../guards/user-login/user-login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: UserLoginComponent },
  { path: 'registration',  component: UserRegistrationComponent },
  { path: 'home',  component: ChatHomeComponent, canActivate: [ UserLoginGuard ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
