import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  Headaer = new HttpHeaders({
    UserId: localStorage.getItem('UserId'),
    Token: localStorage.getItem('Token'),
  });
  
  constructor(private http: HttpClient) { }

  getRoleInformations(PageNumber: Number): Observable<any> {
    return this.http
      .get<any>(`https://localhost:44337/api/Role/GetRoleInfos/${PageNumber}`, {
        headers: this.Headaer,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => of(err))
      );
  }
  getRoleInformation(RoleId: any): Observable<any> {
    return this.http
      .get(`https://localhost:44337/api/Role/GetRoleInfo/${RoleId}`, {
        headers: this.Headaer,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => of(
          console.log("error")
        ))
      );
  }
  UpdateRoleInfo(value): Observable<any> {
     return this.http
       .post(`https://localhost:44337/api/Role/UpdateRoleInfo`,value, {
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
   AddRoleInfo(value): Observable<any> {
    return this.http
      .post(`https://localhost:44337/api/Role/AddRoleInfo`,value, {
        headers: this.Headaer,
      })
      .pipe(
        map((response) => {
          console.log("success");
          console.log(response);
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
