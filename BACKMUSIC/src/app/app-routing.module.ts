import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

import { DepartmentsComponent } from './Components/departments/departments.component';
import { PopularComponent } from './Components/popular/popular.component';
import { SalesComponent } from './Components/sales/sales.component';
import { ServicesComponent } from './Components/services/services.component';
import { RecommendedComponent } from './Components/recommended/recommended.component';

import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'recommended', component: RecommendedComponent},
  {path: 'products', component: ProductListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
