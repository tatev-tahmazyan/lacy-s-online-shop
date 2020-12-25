import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ClothingComponent } from './user/clothing/clothing.component';
import { ShoesComponent } from './user/shoes/shoes.component';

const appRoutes: Routes = [
  { path: 'login',
    component: LoginComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  { path: 'clothing',
    component: ClothingComponent
  },
  { path: 'shoes',
    component: ShoesComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
export default appRoutes;
