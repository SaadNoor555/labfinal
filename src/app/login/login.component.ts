import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newuser = new User()
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(): void{
    this.userService.addUser(this.newuser);
    this.router.navigate(['current-user']);
  }
  cancel():void{
    this.router.navigate([''])
  }

}
