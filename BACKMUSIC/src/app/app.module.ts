import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { PopularComponent } from './Components/popular/popular.component';
import { SalesComponent } from './Components/sales/sales.component';
import { ServicesComponent } from './Components/services/services.component';
import { RecommendedComponent } from './Components/recommended/recommended.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductsComponent } from './Components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LandingPageComponent,
    DepartmentsComponent,
    PopularComponent,
    SalesComponent,
    ServicesComponent,
    RecommendedComponent,
    ProductListComponent,
    ProductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
