import { Component, OnInit } from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../login/login.component";
import {AppService} from '../../app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public isUserLogIn = AppService.isAdminPageShow;

  constructor(public dialog: MatDialog,
              private appService: AppService) { }

  ngOnInit(): void {
  }
  openDialog() {
  	this.isUserLogIn = !AppService.isAdminPageShow;
    console.log(AppService.isAdminPageShow);
  	this.dialog.open(LoginComponent);
  }


}
