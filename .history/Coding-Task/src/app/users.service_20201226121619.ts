import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 subject = new Subject();
  constructor(private http:HttpClient) {

  }
  getusers(){

  this.subject.next(this.http.get("https://jsonplaceholder.typicode.com/users"))

  }
  users(){
    return this.subject;
  }

}
