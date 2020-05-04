import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { UserSVC } from '../../providers';
import { MainPage, MainPageHr } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
   account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
    public userSVC: UserSVC,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
  }

  // Attempt to login in through our User service
  doLogin() {
    this.userSVC.login(this.account.email, this.account.password).subscribe((resp) => {
      if(resp){
        if(resp.UserType === "1") {
          this.navCtrl.push(MainPage);
        } else {
          this.navCtrl.push(MainPageHr);
        }
        
      }else {
        let toast = this.toastCtrl.create({
          message: "User not exists, please check credentials !",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
      
    }, (err) => {
      // this.navCtrl.push(MainPageHr);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: "Login error!",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
