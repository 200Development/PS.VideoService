import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    AddAccountComponent,
    UploadComponent
  ],
  imports: [        
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
