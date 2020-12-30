import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { flatMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 subject:any;
  constructor(private http:HttpClient) {
    this.isAMatch = this.isAMatch.bind(this);
    this.subject = new BehaviorSubject(this.http.get("https://jsonplaceholder.typicode.com/users")).pipe(flatMap(data=>data));
  }

  users(){
    return this.subject;
  }

  filter(query) {
    return from(this.subject).pipe(
      flatMap(users => ),
      filter(user => this.isAMatch(user, query))
    ).subscribe(x => console.log(x))
  }

  _buildRegexes(query) {

  }

  isAMatch(user, query) {
    let nameRegex = new RegExp(query);
    let usernameRegex = new RegExp(query);
    let emailRegex = new RegExp(query);
    let latRegex = new RegExp(query);
    let longRegex = new RegExp(query);

    debugger;

    let result = nameRegex.test(user.name) || usernameRegex.test(user.username) || emailRegex.test(user.email) || latRegex.test(user.address.geo.lat) || longRegex.test(user.address.geo.lng);

    console.log("Result :", result);

    return result;
  }

}
