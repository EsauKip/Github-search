import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private username!: string;
// private clientid='';
private clientsecret!:'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';
  http: any;

  constructor(_http:Http) {
    console.log("You are now ready to request!");
    this.username='EsauKip'
   }
   getUserInfo() {
     return this.http.get("https://api.github.com/users/" + this.username).map((ressponse: any) => ressponse.json())
   }
}
