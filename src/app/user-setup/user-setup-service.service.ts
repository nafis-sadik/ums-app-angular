import { User } from './../shared/models/models.component';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserSetupServiceService {
  Headaer = new HttpHeaders({
    UserId: localStorage.getItem('UserId'),
    Token: localStorage.getItem('Token'),
  });

  constructor(private http: HttpClient,private route: Router) {}

  getUsers(PageNumber: Number): Observable<any> {
    return this.http
      .get<any>(`https://localhost:44337/api/Users/GetAll/${PageNumber}`, {
        headers: this.Headaer,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => of(err))
      );
  }

  ChangePass(OldPass: String, NewPass: string): Observable<any> {
    let UserId = localStorage.getItem('UserId');
    return this.http
      .post<any>(
        `https://localhost:44337/api/Users/ChangePassword/${UserId}/${OldPass}/${NewPass}`,
        { headers: this.Headaer }
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => of(err))
      );
  }

  getUser(UserId: string): Observable<any> {
    return this.http
      .get(`https://localhost:44337/api/Users/Get/${UserId}`, {
        headers: this.Headaer,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => of(error))
      );
  }
addNewUser(addUser): Observable<any>{
    console.log(addUser);
    return this.http
    .post(`https://localhost:44337/api/Users/Add`,addUser, {
      headers: this.Headaer,
    })
    .pipe(
      map((response) => {
        console.log("success");
        console.log(response);
        return response;
      }),
      catchError((error) =>
      of(console.log("error")))
    );
}
  UpdateUserData(UserInfo): Observable<any> {
   console.log(UserInfo);
    return this.http
      .post(`https://localhost:44337/api/Users/Update`,UserInfo, {
        headers: this.Headaer,
      })
      .pipe(
        map((response) => {
          console.log("success");
          console.log(response);
          this.route.navigate(['/User']);
          return response;
        }),
        catchError((error) =>
        of(console.log("error")))
      );
  }
}
