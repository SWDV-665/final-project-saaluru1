import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
// import { Items } from '../../providers';
import { Items } from '../../providers/items/items';
import { Job } from '../../models/job.model';

@IonicPage()
@Component({
  selector: 'page-list-masterMyJobs',
  templateUrl: 'list-masterMyJobs.html'
})
export class ListMasterMyJobsPage {
  totalItems: Job[];
  currentItems: Job[];

  constructor(public navCtrl: NavController, public items: Items, 
    public modalCtrl: ModalController) {
    this.items.query()
    .subscribe( data => {
      if(data) {
        this.items.getSeekerJobs(JSON.parse(localStorage.getItem('userId'))).subscribe(res => {
          if(res) {
            const jobIds = res;
            this.totalItems = data.SearchJobs;
            for(let i of jobIds.JobsList)
            {
              this.totalItems.find(a => a.JobPostedId === i).IsAlreadyApplied = true; 
            }
            this.totalItems = this.totalItems.filter( a => a.IsAlreadyApplied === true);
            this.currentItems = this.totalItems;
            // console.log(this.currentItems);
          }
        });
      }
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
