import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Bruce', 'Dickinson'),
      new User('Dave', 'Murray'),
      new User('Adrian', 'Smith'),
      new User('Janick', 'Gers'),
      new User('Nicko', 'McBrain')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser (user: User) {
    this.users.push(user);
  }

}
