import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = {
      _id: '',
      name: {
        fname: '',
        lname: '',
        uname: ''
      },
      email: '',
      createdDate: Date.now(),
      password: '',
      authToken: ''
    };
  }

  createUser() {
    this.userService.createUser(this.user)
    .then(() => {
      alert('User Created');
      this.router.navigate(['/login']);
    })
    .catch(() => alert('error'));
  }

}
