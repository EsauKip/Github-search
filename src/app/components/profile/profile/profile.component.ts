import { Component, OnInit } from '@angular/core';
import{ServiceService}from '../../../services/service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private _profileService: ServiceService) {
  this._profileService.getUserInfo().subscribe((profile: any) => {
    console.log(profile);
  })
  }

  ngOnInit(): void {
  }

}
