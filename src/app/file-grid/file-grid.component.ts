import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { EmailSettingsService } from "./../settings.service";
import { Router } from "@angular/router";
import { FileService } from "src/app/file.service";
import { Component, OnInit } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { FormErrorStateMatcher } from "src/app/error-state-matcher";
@Component({
  selector: "app-file-grid",
  templateUrl: "./file-grid.component.html",
  styleUrls: ["./file-grid.component.css"]
})
export class FileGridComponent implements OnInit {
  displayedColumns = [];
  dataSource = [];
  emailField;
  constructor(
    private fileService: FileService,
    private router: Router,
    private emailSettingsService: EmailSettingsService
  ) {}

  ngOnInit() {
    this.updateGrid();
    this.fileService.onFileUpdate().subscribe(res => this.updateGrid());
  }

  updateGrid() {
    const data = this.fileService.getFileData();
    if (data && data.length > 0) {
      this.displayedColumns = Object.keys(data[0]);
      this.dataSource = data;
    } else {
      this.displayedColumns = [];
      this.dataSource = [];
    }
  }

  sendMail() {
    this.emailSettingsService.getSettings().subscribe(settings => {
      const data = this.dataSource.map(d => {
        return this.getFormattedEmailBody(d, settings);
      });

      this.fileService.sendMail(data).subscribe();
    });
  }

  getFormattedEmailBody(rowData, settings) {
    const emailAddress = rowData[this.emailField];

    const emailBody = settings.body as string;
    const formattedBody = emailBody.replace(/{.*}/g, match => {
      return rowData[match.substring(1, match.length - 1)];
    });
    return {
      to: emailAddress,
      body: formattedBody
    };
  }
}
