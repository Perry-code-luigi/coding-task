import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  count=0;
  constructor(private UsersService:UsersService) {

    this.UsersService.users().subscribe(data=>this.setcount(data));
  }

  ngOnInit(): void {
  }

  setcount(data){
    this.count=data.lenght
  }

}
