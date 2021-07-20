import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { ServiceModule } from './services/service.module';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    AddAccountComponent,
    PaymentComponent,
    DashboardComponent    
  ],
  imports: [        
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
