import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';

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
  constructor(private dataService: DataService) { }
  onSubmit(form: NgForm) {
    this.dataService.postDatafromForm(form.value).subscribe({
      next: (data) => { console.log(data) },
      error: (err) => { console.log(err) }
    })
  }
  onBlur(formField: NgModel) {
    console.log(formField)
  }

  ngOnInit(): void {

  }

}
