import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSetupServiceService {
  private http: HttpClient;
  private pagingParams = {
    Page: 1,
    PageSize: 10,
    SearchString: '',
  };
  constructor() {}

  getUsers(): Observable<any> {
    return this.http
      .get<any>(`https://localhost:44337/api/Users/GetAll/` + this.pagingParams)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => of(err))
      );
  }
}
