import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterHrMyJobsPage } from './list-masterHrMyJobs';

@NgModule({
  declarations: [
    ListMasterHrMyJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterHrMyJobsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterHrMyJobsPage
  ]
})
export class ListMasterHrMyJobsPageModule { }
