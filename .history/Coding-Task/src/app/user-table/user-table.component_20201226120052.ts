import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userdata=[];

  constructor(private UsersService:UsersService) {

  }

  ngOnInit(): void {
    this.UsersService.getusers().subscribe(this.setUsers);
  }
  setUsers(data){
this.userdata=data
console.log(this.userdata);
  }

}
