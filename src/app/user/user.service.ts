import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Kimi', 'Nemlander'),
      new User('Other', 'Guy'),
      new User('Kyrba', 'Jooseppi'),
      new User('Fourth', 'Fellow')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser (user: User) {
    this.users.push(user);
  }

}
