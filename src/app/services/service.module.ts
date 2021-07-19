import { NgModule } from '@angular/core';
import { AddVideoComponent } from '../video/add/add.component';
import { AzureUploadComponent } from './azure/upload.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    PaymentComponent,
    AddVideoComponent,
    AzureUploadComponent
  ],
  imports: [
  ],
  exports: [
    PaymentComponent,
    AddVideoComponent,
    AzureUploadComponent
  ]
})
export class ServiceModule { }
