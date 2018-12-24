import { Component, OnInit } from '@angular/core';
import { FileUploader, } from 'ng2-file-upload';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploader: FileUploader = new FileUploader({ url: "api/uploadFile", removeAfterUpload: false, autoUpload: true });
}
