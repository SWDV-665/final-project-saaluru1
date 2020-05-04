import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { UserSVC } from '../../providers';
import { MainPage } from '../';
// import { UserModel } from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  addForm: FormGroup;
 /*  public userModel : UserModel = {UserName: '',
    Password: '',
    UserType: '',
    FirstName: '',
    LastName: '',
    Location: '',
    YOE: null}; */

  // Our translated text strings
  // private signupErrorString: string;

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController,
    public userSVC: UserSVC,
    public toastCtrl: ToastController
    // ,public translateService: TranslateService
    ) {

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
      UserType: 1,
      Location: ['', Validators.required],
      YOE: [''],
      Skills: [''],
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
          this.navCtrl.push(MainPage);
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
