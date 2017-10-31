import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Kimi', 'Nemlander'),
      new User('Other', 'Guy'),
      new User('Kyrba', 'Jooseppi')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

}
