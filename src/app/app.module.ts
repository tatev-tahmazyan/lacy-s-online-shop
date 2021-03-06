import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './user/header/header.component';
import { HomeComponent } from './user/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import appRoutes from './app.routing';
import { LoginComponent } from './login/login.component';
import { ClothingComponent } from './user/clothing/clothing.component';
import { ShoesComponent } from './user/shoes/shoes.component';
import { MaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import {AdminMainComponent} from './admin/admin-main/admin-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ClothingComponent,
    ShoesComponent,
    AdminMainComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule, 
    FormsModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
