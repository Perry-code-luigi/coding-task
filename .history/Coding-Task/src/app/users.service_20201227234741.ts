import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { flatMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  subject: any;
  filterSub$: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.isAMatch = this.isAMatch.bind(this);
    this.subject = new BehaviorSubject(
      this.http.get('https://jsonplaceholder.typicode.com/users')
    ).pipe(flatMap((data) => data));
    this.filterSub$ = new BehaviorSubject("");
    this._setFilterSubject();
  }

  users() {
    return this.subject;
  }

  _setFilterSubject() {
    return this.filterSub$.pipe(
      flatMap(
        query =>  from(this.subject)
        .pipe(
          flatMap((users: any) => users),
          filter((user) => this.isAMatch(user, query))
        )
      )
    )
  }

  filter(query) {
    return this.filterSub$.next(query);
  }

  _buildRegexes(query) {}

  isAMatch(user, query) {
    let nameRegex = new RegExp(query, "i");
    let usernameRegex = new RegExp(query, "i");
    let emailRegex = new RegExp(query, 'i');
    let latRegex = new RegExp(query, "i");
    let longRegex = new RegExp(query, "i");

    let result =
      nameRegex.test(user.name) ||
      usernameRegex.test(user.username) ||
      emailRegex.test(user.email) ||
      latRegex.test(user.address.geo.lat) ||
      longRegex.test(user.address.geo.lng);

    return result;
  }
}
