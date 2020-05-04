import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../../src/providers/items/items';
import { Job } from '../../models/job.model';
import { Tab1Root } from '../';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  totalItems: Job[];
  currentItems: Job[];

  constructor(public navCtrl: NavController, public items: Items, 
    public toastCtrl: ToastController,
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
            this.totalItems = this.totalItems.filter( a => a.IsAlreadyApplied != true);
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
   * Adding a new Job
   */
  applyJob(item: Item) {
    var apply = {
      UserId: 1,
      JobId: item.JobPostedId
    };
    this.items.applyJob(apply)
    .subscribe( data => {
      let toast = this.toastCtrl.create({
        message: 'Applied successfully!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push(Tab1Root);
    })
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
