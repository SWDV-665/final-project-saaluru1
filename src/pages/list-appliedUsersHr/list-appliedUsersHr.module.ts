import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListAppliedUsersHrPage } from './list-appliedUsersHr';

@NgModule({
  declarations: [
    ListAppliedUsersHrPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAppliedUsersHrPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListAppliedUsersHrPage
  ]
})
export class ListAppliedUsersHrPageModule { }
