import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { flatMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 subject:any;
  constructor(private http:HttpClient) {
    this.subject = new BehaviorSubject(this.http.get("https://jsonplaceholder.typicode.com/users")).pipe(flatMap(data=>data));
  }

  users(){
    return this.subject;
  }

  filter(query) {
    this.subject.pipe(
      filter(user => this.isAMatch)
    )
  }

  isAMatch(user) {

  }

}
