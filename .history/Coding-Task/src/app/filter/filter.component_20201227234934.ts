import { Subscription } from 'rxjs';
import { UsersService } from './../users.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  subscription: Subscription;

  @Output() filterEvent = new EventEmitter();

  constructor(private usersService: UsersService) {
    this.subscription = this.usersService.filterSub$
    .subscribe(filteredUsers => this.filterEvent.emit(filteredUsers));
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.usersService.filter(form.query);
  }
}
