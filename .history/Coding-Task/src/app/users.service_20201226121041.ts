import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 subject:Subject;
  constructor(private http:HttpClient) {
    this.subject=[];
  }
  getusers(){

     this.http.get("https://jsonplaceholder.typicode.com/users").pipe(map((data)=>this.subject.next(data)))

  }
  users(){
    return this.subject;
  }

}
