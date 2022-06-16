import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
//import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

export interface Data {
  user: string;
}
export interface Roles {
  admin?: boolean;
  writer?: boolean;
  reader?: boolean;
}
export interface User {
  id: number;
  name: Roles;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminPage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(private http: HttpClient, private router: Router) {
    this.columns = [{ name: 'id' }, { name: 'name' }];
    this.http.get<Data>('../../assets/user.json').subscribe((res) => {
      console.log(res);
      this.rows = res.user;
    });
  }

  ngOnInit(): void {}
}
