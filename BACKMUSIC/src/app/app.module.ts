import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { KeyboardsComponent } from './Components/product-depts/Keyboards/keyboards.component';
import { MicrophonesComponent } from './Components/product-depts/Microphones/microphones.component';
import { ToysComponent } from './Components/product-depts/Toys/toys.component';
import { HeadphonesComponent } from './Components/product-depts/Headphones/headphones.component';
import { ElectronicDrumsComponent } from './Components/product-depts/Electronic-Drums/electronic-drums.component';
import { DJGearComponent } from './Components/product-depts/DJ-Gear/dj-gear.component';
import { ControllersComponent } from './Components/product-depts/Controllers/controllers.component';
import { ProductsSaleComponent } from './Components/products-sale/products-sale.component';

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
    ProductsComponent,
    KeyboardsComponent,
    MicrophonesComponent,
    ToysComponent,
    HeadphonesComponent,
    ElectronicDrumsComponent,
    DJGearComponent,
    ControllersComponent,
    ProductsSaleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
