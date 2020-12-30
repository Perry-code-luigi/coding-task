import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  host: {
    "class": "notification-wrapper"
  }
})
export class NotificationComponent implements OnInit {
  count=0;
  constructor(private UsersService:UsersService) {
    this.setcount=this.setcount.bind(this);
    this.UsersService.filterResult.subscribe(this.setcount);
  }

  ngOnInit(): void {
  }

  setcount(data){
    console.log(data)
    this.count=data.length;
  }

}
