import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web1';
  currentFile!: File;
  progress: number | undefined;
  message: string | undefined;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }
  onFileChange(event: any) {
    this.currentFile = event.target.files[0];
    this.upload(this.currentFile);
  }

  upload = (file) => {
    if (file.length === 0) {
      return;
    }

    let fileToUpload = file;
    const formData = new FormData();

    var httpOptions = {
      headers:[{
        'Access-Control-Allow-Origin':  'true'
      }],
      reportProgress: true,
    };
    formData.append('file', file);

    this.http.post('https://localhost:44377/upload/upload', formData, { headers: new HttpHeaders({'Access-Control-Allow-Origin': 'true'}) })
      .subscribe(event => {
            this.message = 'Upload Successful.';
        })
  
  }
 /* async upload() {s
    // generate account sas token
    const accountName = environment.accountName;
    const key = environment.key;
    const start = new Date(new Date().getTime() - (15 * 60 * 1000));
    const end = new Date(new Date().getTime() + (30 * 60 * 1000));
    const signedpermissions = 'rwdlac';
    const signedservice = 'b';
    const signedresourcetype = 'sco';
    const signedexpiry = end.toISOString().substring(0, end.toISOString().lastIndexOf('.')) + 'Z';
    const signedProtocol = 'https';
    const signedversion = '2018-03-28';

    const StringToSign =
      accountName + '\n' +
      signedpermissions + '\n' +
      signedservice + '\n' +
      signedresourcetype + '\n' +
      '\n' +
      signedexpiry + '\n' +
      '\n' +
      signedProtocol + '\n' +
      signedversion + '\n';
    const crypto = require('crypto');
    const sig = createHmac('sha256', key).update(StringToSign, 'utf8').digest('base64');
    const sasToken = `sv=${(signedversion)}&ss=${(signedservice)}&srt=${(signedresourcetype)}&sp=${(signedpermissions)}&se=${encodeURIComponent(signedexpiry)}&spr=${(signedProtocol)}&sig=${encodeURIComponent(sig)}`;
    // const sasToken = `sp=racw&st=2021-06-26T05:28:50Z&se=2021-06-26T13:28:50Z&spr=https&sv=2020-02-10&sr=c&sig=z9QNtsD2k7fNe1sz8VzjQ8IA7yVRakk%2FvQI9RakYCYY%3D`;
    const containerName = environment.containerName;

    const pipeline = newPipeline(new AnonymousCredential(), {
      retryOptions: { maxTries: 4 }, // Retry options
      userAgentOptions: { userAgentPrefix: "AdvancedSample V1.0.0" }, // Customized telemetry string
      keepAliveOptions: {
        // Keep alive is enabled by default, disable keep alive by setting false
        enable: true
      }

    });

    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`,
      pipeline)
    const containerClient = blobServiceClient.getContainerClient(containerName)
    if (!containerClient.exists()) {
      console.log("the container does not exit")
      await containerClient.create()

    }
    const client = containerClient.getBlockBlobClient(this.currentFile.name)
    const response = await client.uploadBrowserData(this.currentFile, {
      blockSize: 4 * 1024 * 1024, // 4MB block size
      concurrency: 20, // 20 concurrency
      onProgress: (ev) => console.log(ev),
      blobHTTPHeaders: {
        blobContentType: this.currentFile.type

      }
    },
    )
    console.log(response._response.status)
  }
  */
}