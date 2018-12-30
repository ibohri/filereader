import { Observable } from "rxjs/internal/Observable";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FileUploader, FileUploaderOptions, FileItem } from "ng2-file-upload";
import { GridOptions } from "ag-grid-community";
import { MatDialog } from "@angular/material/dialog";
import { FileService } from "src/app/file.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"]
})
export class FileUploadComponent implements OnInit {
  uploader: FileUploader;

  @Output() onfilechange: EventEmitter<any> = new EventEmitter();

  constructor(private fileService: FileService, private router: Router) {}

  ngOnInit() {
    this.uploader = new FileUploader({
      url: "api/uploadFile",
      removeAfterUpload: false,
      autoUpload: true
    });

    this.uploader.onSuccessItem = this.onSuccessItem;
  }

  onSuccessItem = (item: FileItem, response: string, status: number) => {
    const data = JSON.parse(response);
    this.fileService.updateFileData(data);
    this.router.navigate(["/"]);
  };
}
