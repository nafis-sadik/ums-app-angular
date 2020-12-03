import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSetupServiceService } from '../user-setup-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  PageName: string;
  AddUser: FormGroup;
  constructor(private fb: FormBuilder,
    private userSetupServiceService:UserSetupServiceService) {
    this.PageName = 'Add New User';
  }
  ngOnInit(): void {
    this.AddUser = this.fb.group({
      UserId: ['', Validators.required],
      Name: ['', Validators.required],
      Cellno: ['', Validators.required],
      Email: ['', Validators.required],
      Dob: ['', Validators.required],
      CategoryId: ['', Validators.required],
      Catidval: ['', Validators.required],
      Mfa: ['', Validators.required],
      Recstatus: ['', Validators.required],
    });
  }
  AddNewUser(value):void{
     console.log(value);
    this.userSetupServiceService.addNewUser(value).subscribe((data) => {
    });
  }
}
