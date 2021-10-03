import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'azure-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class AzureUploadComponent {
  file!: File;
  message: string | undefined;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }
  onFileChange(event: any) {
    this.file = event.target.files[0];
    this.upload(this.file);
  }

  upload = (file) => {
    if (file.length === 0) {
      return;
    }

    var formData = new FormData();
    formData.append('file', file);

    var headers = new HttpHeaders(
        {
          'content-type': 'application/json',
          'content-length': file.size
        }
    )

    const response = this.http.post(environment.baseUrl + '/upload/uploadvideo', formData)
    .subscribe({
      next(response) { console.log(response); },
      error(err) { console.log(err) },
      complete() { console.log('Upload Completed Successfully') }
    })
  }
}
