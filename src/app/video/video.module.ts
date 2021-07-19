import { NgModule } from '@angular/core';
import { ServiceModule } from '../services/service.module';
import { AddVideoComponent } from './add/add.component';



@NgModule({
  declarations: [
    AddVideoComponent
  ],
  imports: [
    ServiceModule
  ],
  exports: [
    AddVideoComponent
  ]
})
export class VideoModule { }
