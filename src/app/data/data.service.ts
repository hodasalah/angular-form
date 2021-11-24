import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  //get subscription types
  getAsyncSubscriptionTypes() {
    return of(['Annual', 'Monthly', 'Life Time'])
  }
  //  send data from form to server
  postDatafromForm(formData: UserSettings): Observable<UserSettings | any> {
    return this.http.post('https://putsreq.com/W83Nvtpxa5YKA7afxmHt', formData)
    // return of(formData)
  }
}
