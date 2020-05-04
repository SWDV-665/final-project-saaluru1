import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SignupHrPage } from './signupHr';

@NgModule({
  declarations: [
    SignupHrPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupHrPage),
    TranslateModule.forChild()
  ],
  exports: [
    SignupHrPage
  ]
})
export class SignupHrPageModule { }
