import { NgModule } from '@angular/core';
import { UploadComponent } from '../services/upload/upload.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    UploadComponent,
    AddComponent
  ],
  imports: [
  ],
  exports: [
    UploadComponent
  ]
})
export class VideoModule { }
