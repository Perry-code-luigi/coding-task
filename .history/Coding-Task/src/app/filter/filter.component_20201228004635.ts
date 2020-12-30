import { Subscription } from 'rxjs';
import { UsersService } from './../users.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  @Output() filterEvent = new EventEmitter();

  constructor(private usersService: UsersService) {
    this.emitResult = this.emitResult.bind(this);
    this.subscription = this.usersService.filterSub$.subscribe(this.emitResult);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  emitResult(users) {
    this.usersService.filterResult.next(users);
  }

  onSubmit(form) {
    this.usersService.filter(form.query);
  }
}
