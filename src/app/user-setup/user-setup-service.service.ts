import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSetupServiceService {
  private http: HttpClient;
  constructor() {}

  getUsers(): void {
    this.http.get<any>(`https://localhost:44337/api/Users/GetAll/`);
  }
}
