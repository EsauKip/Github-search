import { Component, OnInit } from '@angular/core';
import{ServiceService}from '../../../services/service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any;
repos:any;
username = "EsauKip";
  constructor( private _profileService: ServiceService) {

  }

  ngOnInit(): void {
    this._profileService.getUsername(this.username);

    this._profileService.getUserInfo().then(profile => {
      console.log(this.profile);
       this.profile = profile;
    });

    this._profileService.getRepos().then(repos => {
      this.repos = repos;
    })
  }

}


