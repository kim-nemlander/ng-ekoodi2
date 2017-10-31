import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'ekoodi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string;
  subTitle: string;
  users: User[];
  @Output() userSelected: EventEmitter<User>;
  firstName: string;
  lastName: string;

  constructor(private userService: UserService) {
    this.title = 'User List';
    this.users = [];
    this.subTitle = 'Add a new user:'
    this.userSelected = new EventEmitter();
    this.firstName = '';
    this.lastName = '';
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  addUser() {
    let user: User = new User(this.firstName, this.lastName);
    this.firstName = '';
    this.lastName = '';
    console.log(user);
    this.userService.addUser(user);
  }

}
