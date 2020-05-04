import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterMyJobsPage } from './list-masterMyJobs';

@NgModule({
  declarations: [
    ListMasterMyJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterMyJobsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterMyJobsPage
  ]
})
export class ListMasterMyJobsPageModule { }
