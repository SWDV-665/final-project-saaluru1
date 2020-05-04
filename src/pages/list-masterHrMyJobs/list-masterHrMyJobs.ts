import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
// import { Items } from '../../providers';
import { Items } from '../../providers/items/items';
import { Job } from '../../models/job.model';

@IonicPage()
@Component({
  selector: 'page-list-masterHrMyJobs',
  templateUrl: 'list-masterHrMyJobs.html'
})
export class ListMasterHrMyJobsPage {
  totalItems: Job[];
  currentItems: Job[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.items.getHRJobs()
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
   * adding new Job
   */
   addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        console.log(item);
        this.items.addNewJob(item)
        .subscribe( data => {
          
        });
      }
    })
    addModal.present();
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
