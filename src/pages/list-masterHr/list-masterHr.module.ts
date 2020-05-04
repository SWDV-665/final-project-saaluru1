import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterHrPage } from './list-masterHr';

@NgModule({
  declarations: [
    ListMasterHrPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterHrPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterHrPage
  ]
})
export class ListMasterHrPageModule { }
