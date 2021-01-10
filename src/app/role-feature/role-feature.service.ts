import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';


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

dropDownList(): Observable<any> {
  return this.http
    .get<any>(`https://localhost:44337/api/RoleFeature/DropdownList`, {
      headers: this.Headaer,
    })
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => of(err))
    );
}

appModuleList(appId: any): Observable<any> {
  return this.http
    .get<any>(`https://localhost:44337/api/RoleFeature/AppModuleList/${appId}`, {
      headers: this.Headaer,
    })
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => of(err))
    );
}

featureList(moduleId: any): Observable<any> {
  return this.http
    .get<any>(`https://localhost:44337/api/RoleFeature/ModuleFeatureList/${moduleId}`, {
      headers: this.Headaer,
    })
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => of(err))
    );
}

AddRoleDetailInfo(value): Observable<any> {
  return this.http
    .post(`https://localhost:44337/api/RoleFeature/AddRoleDetailInfo`,value, {
      headers: this.Headaer,
    })
    .pipe(
      map((response) => {
        console.log("success");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Added.',
          showConfirmButton: false,
          timer: 3000
        })
        return response;
      }),
      catchError((error) =>
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Failed to Add.',
        showConfirmButton: false,
        timer: 3000
    }))
    );
}

}

