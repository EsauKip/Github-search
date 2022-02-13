import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/About/about/about.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile/profile.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component:HomepageComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
