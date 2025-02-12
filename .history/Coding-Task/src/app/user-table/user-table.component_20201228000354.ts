import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  userdata = [];
  subscription: Subscription;

  constructor(private UsersService: UsersService) {
    this.setUsers = this.setUsers.bind(this);
    this.subscription = this.UsersService.users().subscribe(this.setUsers);
  }

  ngOnInit(): void {}

  setUsers(data) {
    this.userdata = data;
  }

  ngDestroy() {
    this.subscription.unsubscribe();
  }

  setFilteredUsers(filteredUsers) {
    console.log(Array.isArray(filteredUsers))
  }
}
