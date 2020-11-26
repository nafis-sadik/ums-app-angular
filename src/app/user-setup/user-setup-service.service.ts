import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { strict } from 'assert';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class UserSetupServiceService {
  Headaer = new HttpHeaders({
    UserId: localStorage.getItem('UserId'),
    Token: localStorage.getItem('Token'),
  });
  constructor(private http: HttpClient) {}

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
}
