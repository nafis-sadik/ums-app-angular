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
      userId: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }
  login(value): void {
    console.log(value);

    this.authServiceService
      .login(value)
      .subscribe((data) => console.log(data, 'dataresponse'));
  }
}
