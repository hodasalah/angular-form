import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    subscriptionType: '',
    interfaceStyle: '',
    notes: ''

  }
  userSettings = { ...this.originalUserSettings }
  postError: Boolean = false;
  postErrorMessage: String = ''
  subscriptionTypes!: Observable<string[]>;
  startDate!: Date;
  singleModel = "1";
  mytime!: Date
  maxRating = 10;
  userRate = 7;
  isReadonly = false;
  overStar: number | undefined;
  percent = 0;

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.maxRating) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }
  constructor(private dataService: DataService) { }
  onHttpError(errResponse: any): void {
    console.log('error: ', errResponse)
    this.postError = true
    this.postErrorMessage = errResponse.error.postErrorMessage
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    // if (form.valid) {
    //   this.dataService.postDatafromForm(this.userSettings).subscribe({
    //     next: (data) => { console.log('success', data) },
    //     error: (err) => { this.onHttpError(err) }
    //   })
    // } else {
    //   this.postError = true
    //   this.postErrorMessage = 'Please Fix the above errors...'
    // }

  }
  onBlur(formField: NgModel) {
    console.log(formField)
  }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getAsyncSubscriptionTypes();
    this.startDate = new Date();
    this.mytime == new Date();

  }

}
