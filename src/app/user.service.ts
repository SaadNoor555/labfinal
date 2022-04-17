import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User = {id:1, firstName:'saad', lastName:'noor', email:'',address:'98/1/1', fileLocation:''}
  constructor() { }

  addUser(newUser: User): void{
    let id = Math.floor((Math.random() * 100000) + 1);
    newUser.id = id;
    this.currentUser = newUser;
  }
  getCurrentUser(): User{
    return this.currentUser;
  }
}
