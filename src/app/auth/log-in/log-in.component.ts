import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  LoginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authServiceService: AuthServiceService
  ) {}

  userIdvalue: string;

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      UserId: ['', Validators.required],
      Pass: ['', Validators.required],
    });
  }
  login(value): void {
    this.authServiceService.login(value).subscribe((data) => {
      localStorage.setItem('UserId', value.UserId);
      localStorage.setItem('Token', data);
    });
  }
}
