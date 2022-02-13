import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';

import{HttpClientModule} from '@angular/common/http';
import{ServiceService}from './services/service.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './nav/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomepageComponent,

    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
