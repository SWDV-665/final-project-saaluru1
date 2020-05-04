import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TabshrPage } from './tabshr';

@NgModule({
  declarations: [
    TabshrPage,
  ],
  imports: [
    IonicPageModule.forChild(TabshrPage),
    TranslateModule.forChild()
  ],
  exports: [
    TabshrPage
  ]
})
export class TabsPageModule { }
