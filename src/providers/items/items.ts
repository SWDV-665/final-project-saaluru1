import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jobs, ApplyJob, AddJob } from '../../models/job.model';

@Injectable()
export class Items {
  baseUrl: string = 'http://3.230.150.249/jobportalapi/api/'
  public token: string;

  constructor(public http: HttpClient) {
    if(localStorage && localStorage.length > 0) {
      this.token = JSON.parse(localStorage.getItem('currentUser'));
    }
   }

  query(params?: any) {
    //return this.api.get('/jobs', params);
    return this.http.get<Jobs>(this.baseUrl + 'jobs/');
  }

  getSeekerJobs(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Token': this.token})
    };
    return this.http.get<any>(this.baseUrl + 'seekerjob/' + id, httpOptions);
  }

  getHRJobs() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Token': this.token})
    };
    return this.http.get<Jobs>(this.baseUrl + 'AddNewJob', httpOptions);
  }

  applyJob(applyjob: ApplyJob) {
    applyjob.UserId = 1;
    let _body = JSON.stringify(applyjob);
    console.log(_body);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Token': this.token})
    };
    return this.http.post(this.baseUrl + 'seekerjob', _body, httpOptions);
  }

  addNewJob(addJob: AddJob) {
    addJob.UserId = 1;
    let _body = JSON.stringify(addJob);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Token': this.token})
    };
    console.log(_body);
    return this.http.post(this.baseUrl + 'AddNewJob', _body, httpOptions);
  }



}
