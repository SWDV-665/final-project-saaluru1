import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// import { Api } from '../api/api';
import { UserModel, JobsAppliedResponse } from '../../models/user.model';

@Injectable()
export class UserSVC {
  _user: any;
  constructor(public http: HttpClient) { }
  baseUrl: string = 'http://3.230.150.249/jobportalapi/api/'

  login(username: string, password: string) {
    let hders = new HttpHeaders({
      'Authorization':  username +':'+ password
    });
    return this.http.post<any>(this.baseUrl + 'Signin',null, {headers: hders})
      .pipe(map(usr => {
        // login successful if there is token in the response
        if (usr && usr.Token) {
          // console.log(JSON.stringify(usr));
          // store user details and token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(usr.Token));
          localStorage.setItem('userType', JSON.stringify(usr.UserType));
          localStorage.setItem('userId', JSON.stringify(usr.UserId));
          // console.log(JSON.parse(localStorage.getItem('currentUser')));
        }
        return usr;
      }));
  }

  createUser(user: UserModel) {
    let _body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    console.log(_body);
    return this.http.post<any>(this.baseUrl + 'UserRegistration', _body, httpOptions)
    .pipe(map(usr => {
      // login successful if there's a token in the response
      if (usr && usr.Token) {
        // console.log(JSON.stringify(usr));
        // store user details and token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(usr.Token));
        localStorage.setItem('userType', JSON.stringify(usr.UserType));
        localStorage.setItem('userId', JSON.stringify(usr.UserId));
        // console.log(JSON.parse(localStorage.getItem('currentUser')));
        this._loggedIn(usr);
      }
      return usr;
    }));
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.http.post('signup', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp;
  }

  getAppliedUsers(jobId: number) {
    return this.http.get<JobsAppliedResponse[]>(this.baseUrl + 'SearchJob/' + jobId);
 }


}
