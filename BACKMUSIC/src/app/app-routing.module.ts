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

import { KeyboardsComponent } from './Components/product-depts/Keyboards/keyboards.component';
import { MicrophonesComponent } from './Components/product-depts/Microphones/microphones.component';
import { ToysComponent } from './Components/product-depts/Toys/toys.component';
import { HeadphonesComponent } from './Components/product-depts/Headphones/headphones.component';
import { ElectronicDrumsComponent } from './Components/product-depts/Electronic-Drums/electronic-drums.component';
import { DJGearComponent } from './Components/product-depts/DJ-Gear/dj-gear.component';
import { ControllersComponent } from './Components/product-depts/Controllers/controllers.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'recommended', component: RecommendedComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'keyboards', component: KeyboardsComponent},
  {path: 'microphones', component: MicrophonesComponent},
  {path: 'toys', component: ToysComponent},
  {path: 'headphones', component: HeadphonesComponent},
  {path: 'electronic-drums', component: ElectronicDrumsComponent},
  {path: 'dj-gear', component: DJGearComponent},
  {path: 'controllers', component: ControllersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
