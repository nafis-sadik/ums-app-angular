import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleFeatureService {
  Headaer = new HttpHeaders({
    UserId: localStorage.getItem('UserId'),
    Token: localStorage.getItem('Token'),
  });
  
constructor(private http:HttpClient) { }

roleFeatureInformations(PageNumber: Number): Observable<any> {
  return this.http
    .get<any>(`https://localhost:44337/api/RoleFeature/GetRoleFeatureInfos/${PageNumber}`, {
      headers: this.Headaer,
    })
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => of(err))
    );
}

roleFeatureInformation(RoleId: any): Observable<any> {
  return this.http
    .get<any>(`https://localhost:44337/api/RoleFeature/GetRoleFeatureInfo/${RoleId}`, {
      headers: this.Headaer,
    })
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => of(err))
    );
}

}

