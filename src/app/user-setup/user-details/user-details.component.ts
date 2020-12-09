import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/models.component';
import { UserSetupServiceService } from './../user-setup-service.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public UserId: string;
  PageName: string;
  _user:User = new User();
  constructor(private route: ActivatedRoute,
    private userSetupServiceService: UserSetupServiceService,) {
      this.PageName = 'User Details';
     }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.UserId = params['UserId'];
    });
    console.log(this.UserId);
   this.userSetupServiceService.getUser(this.UserId).subscribe((data) => {
      console.log(data.name);
      this._user.Name=data.name;
    });;
  }
}


