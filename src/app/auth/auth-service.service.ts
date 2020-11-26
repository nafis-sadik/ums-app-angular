import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {
  constructor(private http: HttpClient, private route: Router) {}

  login(value: any): Observable<any> {
    return this.http
      .post<any>(
        `https://localhost:44337/api/Login/Login/${value.UserId}/${value.Pass}`,
        null
      )
      .pipe(
        map((response) => {
          this.route.navigate(['/User']);
          return response;
        }),
        catchError((error) => of(error))
      );
  }
}
