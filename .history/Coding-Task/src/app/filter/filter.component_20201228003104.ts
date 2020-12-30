import { Subscription } from 'rxjs';
import { UsersService } from './../users.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

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
    this.subscription = this.usersService.filterSub$.pipe(
      flatMap(
        query =>  query == "" ? this.subject : from(this.subject).pipe(
          map((users: any) => {
            console.log("I'm a singleton")
            return users.filter(user => this.isAMatch(user, query))
          }),
        )
      )
    ).subscribe(this.emitResult);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  emitResult(users) {
    this.filterEvent.emit(users);
  }

  onSubmit(form) {
    this.usersService.filter(form.query);
  }
}
