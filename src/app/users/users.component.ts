import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UsersService } from './services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  navigateToViewUser(user: User) {
    this.router.navigate([`./${user.id}`, { a: 1, b: '{ "z": 1 }' }], { relativeTo: this.activatedRoute });
  }
}
