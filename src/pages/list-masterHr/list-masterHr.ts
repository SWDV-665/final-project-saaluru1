import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../../src/providers/items/items';
import { Job } from '../../models/job.model';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-masterHr.html'
})
export class ListMasterHrPage {
  totalItems: Job[];
  currentItems: Job[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.items.query()
    .subscribe( data => {
      this.totalItems  = data.SearchJobs;
      this.currentItems = this.totalItems;
      console.log(this.totalItems);
    });
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
