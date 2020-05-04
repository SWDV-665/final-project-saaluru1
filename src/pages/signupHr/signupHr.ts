import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { UserSVC } from '../../providers';
import { MainPageHr } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signupHr.html'
})
export class SignupHrPage {
  addForm: FormGroup;
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  /* account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  }; */

  // Our translated text strings
  // private signupErrorString: string;

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController,
    public userSVC: UserSVC,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    /* this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    }) */
  }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      UserName: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', Validators.required],
      UserType: 2,
      Location: ['', Validators.required]
    });
  }

  doSignup() {
    console.log(JSON.stringify(this.addForm.value));
    this.userSVC.createUser(this.addForm.value).subscribe((resp) => {
      if(resp) {
        if(resp.Status === false) {
          let toast = this.toastCtrl.create({
            message: 'User already exists !',
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }else {
          this.navCtrl.push(MainPageHr);
        }
      }
    }, (err) => {
      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: 'Some error in creating user !',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
