import { EmailFormatDialog } from "./../email-format/email-format.component";
import { Component, OnInit } from "@angular/core";
import { FileUploader, FileUploaderOptions, FileItem } from "ng2-file-upload";
import { GridOptions } from "ag-grid-community";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"]
})
export class FileUploadComponent implements OnInit {
  uploader: FileUploader;
  data: any;
  gridOptions: GridOptions;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.uploader = new FileUploader({
      url: "api/uploadFile",
      removeAfterUpload: false,
      autoUpload: true
    });

    this.uploader.onSuccessItem = this.onSuccessItem;

    this.gridOptions = <GridOptions>{
      columnDefs: this.getColumnDefs(),
      rowData: this.data || [],
      context: {
        componentParent: this
      },
      enableColResize: true
    };
  }

  openDialog() {
    const dialogRef = this.dialog.open(EmailFormatDialog, {
      width: "70%",
      height: "75%",
      data: this.getColumnDefs().map(t => t.headerName)
    });
  }

  getColumnDefs(): Array<any> {
    if (this.data && this.data.length) {
      return Object.keys(this.data[0]).map(d => {
        return {
          headerName: d,
          field: d
        };
      });
    }
    return [];
  }

  onSuccessItem = (item: FileItem, response: string, status: number) => {
    this.data = JSON.parse(response);

    this.gridOptions.api.setColumnDefs(this.getColumnDefs());
    this.gridOptions.api.setRowData(this.data);
    this.gridOptions.api.sizeColumnsToFit();
  };
}
