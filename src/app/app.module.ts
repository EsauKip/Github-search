import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { AboutComponent } from './components/About/about/about.component';
import{HttpClientModule} from '@angular/common/http';
import{ServiceService}from './services/service.service';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomepageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
