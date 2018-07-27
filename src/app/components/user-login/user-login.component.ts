import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private email: String;
  private password: String;
  private loginError: Boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  userLogin() {
    this.userService.loginUser({user: this.email, password: this.password})
    .then(user => {
      if (user === false) {
        this.loginError = true;
      } else {
        if (user.authToken !== false ) {
          this.router.navigate(['/home']);
        }
      }
    })
    .catch(err => console.log);
  }
}
