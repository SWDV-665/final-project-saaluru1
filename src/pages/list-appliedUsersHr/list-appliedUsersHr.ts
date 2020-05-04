import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/items/items';
import { AppliedUsers } from '../../models/job.model';
import { UserDetailsResponse } from '../../models/user.model';
import { UserSVC } from '../../providers/user/userSVC';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-list-appliedUsersHr',
  templateUrl: 'list-appliedUsersHr.html'
})
export class ListAppliedUsersHrPage {
  totalItems: AppliedUsers[] = [];
  currentItems: AppliedUsers[];
  public jobsAppliedResponse: any;
  public usrDetails: UserDetailsResponse[]

  constructor(public navCtrl: NavController, public items: Items, public usrSVC: UserSVC, public modalCtrl: ModalController
    ,private emailComposer: EmailComposer) {
    this.items.getHRJobs()
    .subscribe( data => {
      if(data) {
        // console.log(data.SearchJobs);
        data.SearchJobs.forEach(job => {
          // console.log(job.JobPostedId);
          this.usrSVC.getAppliedUsers(job.JobPostedId)
          .subscribe( usrs => {
            // console.log(usrs);
            if(usrs) {
            this.jobsAppliedResponse = usrs;
            this.usrDetails = this.jobsAppliedResponse.AppliedUsers ;
            // console.log(this.usrDetails);
            this.usrDetails.forEach(u => {
              this.totalItems.push({
                JobPostedId: job.JobPostedId,
                JobTitle: job.JobTitle,
                JobDescription: job.JobDescription,
                Salary : job.Salary,
                Location: job.Location,
                Skills: job.Skills,
                UserId: 0,
                FirstName: u.FirstName,
                LastName: u.LastName,
                UserName: u.UserName
              });
            });
            this.currentItems = this.totalItems;
            }
     });
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
  contact(item: Item) {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
        let email = {
          to: item.UserName,
          cc: '',
          bcc: [],
          attachments: [],
          subject: 'Email from JobPotal',
          body: 'How are you? Nice greetings from JobPortal',
          isHtml: true
        };
        
        // Send a text message using default options
        this.emailComposer.open(email);
        console.log(email);
      }
     }).catch((error) => {
      console.error("Error while sending email", error);
    }); 
     
     
  }
}
