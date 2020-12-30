import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 subject:any;
  constructor(private http:HttpClient) {
    this.subject = new BehaviorSubject(this.http.get("https://jsonplaceholder.typicode.com/users"));
  }
  getusers(){

  this.subject.next()

  }
  users(){
    return this.subject;
  }

}
