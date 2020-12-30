import { UsersService } from './../users.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit(query) {
    this.usersService.filter(query).subscribe(filteredUsers => this.filterEvent.emit(filteredUsers));
  }
}
