import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../core/service/users.service';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})
export class HomeAppComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(){
    //this.getUserLogged();
  }

  getUserLogged(){
    //this.usersService.getUser().subscribe((user)=>{
    //  console.log(user);
    //});
  }
}
