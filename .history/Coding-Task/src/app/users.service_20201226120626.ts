import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 subject:Subject;
  constructor(private http:HttpClient) {
    this.subject=[];
  }
  getusers(){


  }
  users(){
    return this.subject;
  }

}
