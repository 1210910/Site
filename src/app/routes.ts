import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { BuildingComponent } from './building/building.component';
import {BuildingCreateComponent} from "./Building/buildingCreate.component";


const routeConfig: Routes = [
  {
    path:'',
    component: LoginComponent,
    title: 'Login page'
  },
  {
    path:'building',
    component: BuildingComponent,
    title: 'building page'
  },
    {
        path:'buildingCreate',
        component: BuildingCreateComponent,
        title: 'building create page'
    },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;
