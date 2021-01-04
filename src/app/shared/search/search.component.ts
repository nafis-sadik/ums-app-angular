import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
  }
  route(){
    if (this.router.url.split('/')[1] === 'User'){
      console.log("kaj hoice");
      this.router.navigate(['/User/AddNewUser'])
    }
    if (this.router.url.split('/')[1] === 'Role'){
      console.log("kaj hoice");
      this.router.navigate(['/Role/AddNewRole'])
    }
    if (this.router.url.split('/')[1] === 'RoleFeature'){
      console.log("kaj hoice");
      this.router.navigate(['/RoleFeature/Create'])
    }
  }
}
