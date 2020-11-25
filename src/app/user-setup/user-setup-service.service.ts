import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSetupServiceService {
  private pagingParams = {
    Page: 1,
    PageSize: 10,
    SearchString: '',
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    console.log('service');
    let Headaers = new HttpHeaders({
      UserId: localStorage.getItem('UserId'),
      Token: localStorage.getItem('Token'),
    });
    let Prams = new HttpParams();
    console.log(Prams.keys());
    Prams.append('Page', '1');
    return this.http
      .get<any>(
        `https://localhost:44337/api/Users/GetAll?Page=${this.pagingParams.Page}&PageSize=${this.pagingParams.PageSize}`,
        { headers: Headaers }
      )
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => of(err))
      );
  }
}
