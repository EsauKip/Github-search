import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private username="";
private clientsecret!:'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';


  constructor(private http:HttpClient) {
    console.log("You are now ready to request!");

   }

   getUserInfo() {
    //  return this.http.get("https://api.github.com/users/" + this.username).map((response: any) => response.json())

    return this.http.get<any[]>(`https://api.github.com/users/${this.username}??access_token=+${this.clientsecret}`).toPromise();
  }

  getUsername(username: string) {
    this.username = username;
  }

  getRepos(){
    return this.http.get<any[]>(`https://api.github.com/users/${this.username}/repos??access_token=+${this.clientsecret}`).toPromise();
  }

}
