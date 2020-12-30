import { SigninService } from '../signin.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private SigninService:SigninService) { }

  ngOnInit(): void {
  }
  onSubmit(data):void{
   this.SigninService.singin(data.email,data.password)
  }


}
