import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FileUploadModule, FileSelectDirective } from "ng2-file-upload";
import { AppComponent } from "./app.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { AgGridModule } from "ag-grid-angular";
import { MatDialogModule } from "@angular/material/dialog";
import { EmailFormatDialog } from "./email-format/email-format.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, FileUploadComponent, EmailFormatDialog],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    AgGridModule.withComponents([]),
    MatDialogModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EmailFormatDialog]
})
export class AppModule {}
