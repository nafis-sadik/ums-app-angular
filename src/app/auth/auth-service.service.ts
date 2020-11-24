import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login(value: any): Observable<any> {
    return this.http
      .post<any>(
        `https://localhost:44337/api/Login/Login/${value.userId}/${value.pass}`,
        null
      )
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        }),
        catchError((error) => of(error))
      );
  }
}
