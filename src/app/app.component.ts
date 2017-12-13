import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ekoodi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  showUserList() {
    this.router.navigate(['/users']);
  }

  showAddUser() {
    this.router.navigate(['/add-user']);
  }
}




