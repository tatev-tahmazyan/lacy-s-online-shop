import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private appService: AppService,
              private routing: Router

  ) { }

  ngOnInit(): void {
  }

  login(username: string, password: string): void {
    if ((username === 'admin')) {
      AppService.isAdminPageShow = true;
      this.routing.navigateByUrl('/admin-main');
    } else {
      AppService.isAdminPageShow = false;
      this.routing.navigateByUrl('/home');
    }
  }

}
