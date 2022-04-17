import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  curUser: User = {id:1, firstName:'saad', lastName:'noor', email:'',address:'98/1/1', fileLocation:''}
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.curUser = this.userService.getCurrentUser();
  }

}
