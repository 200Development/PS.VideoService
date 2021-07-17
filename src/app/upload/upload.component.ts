import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  progress: number | undefined;
  message: string | undefined;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  'true'
      }),
      reportProgress: true,
    };
    formData.append('file', fileToUpload);

    this.http.post('https://localhost:5001/api/upload', formData, httpOptions)
      .subscribe(event => {
            this.message = 'Upload Successful.';
        })
  
  }
}
