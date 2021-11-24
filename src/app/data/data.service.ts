import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  postDatafromForm(formData: UserSettings): Observable<UserSettings> {
    return of(formData)
  }
}
