import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1RootHr, Tab2RootHr, Tab3RootHr } from '..';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabshr.html'
})
export class TabshrPage {
  tab1RootHr: any = Tab1RootHr;
  tab2RootHr: any = Tab2RootHr;
  tab3RootHr: any = Tab3RootHr;

  tab1Title = "Home";
  tab2Title = "My Jobs";
  tab3Title = "Applied Users";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    /* translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = "My Jobs" ; //values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    }); */
  }
}
