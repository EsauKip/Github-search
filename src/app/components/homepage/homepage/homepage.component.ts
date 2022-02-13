import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

import{UserClass}from '../../../user-class/user-class';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  [x: string]: any;
profile:any=UserClass;
username:string='EsauKip'


  constructor(private _userService:ServiceService) { }

  ngOnInit(): void {
this._userService.getUsername(this.username)

     this._userService.getUserInfo().then(profile => {
      console.log(this.profile);
       this.profile = profile;
    });

  }

}
