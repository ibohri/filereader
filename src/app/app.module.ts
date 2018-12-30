import { EmailSettingsService } from "./settings.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule, FileSelectDirective } from "ng2-file-upload";
import { AppComponent } from "./app.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { AgGridModule } from "ag-grid-angular";
import { MatDialogModule } from "@angular/material/dialog";
import { EmailFormatDialog } from "./email-format/email-format.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatIconModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { FileGridComponent } from "./file-grid/file-grid.component";
import { MatTableModule } from "@angular/material/table";
import { SettingsFormComponent } from "./settings-form/settings-form.component";
import { HttpClientModule } from "@angular/common/http";
const routes: Routes = [
  {
    path: "",
    component: FileGridComponent
  },
  {
    path: "grid",
    component: FileGridComponent
  },
  {
    path: "settings",
    component: SettingsFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    EmailFormatDialog,
    FileGridComponent,
    SettingsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    AgGridModule.withComponents([]),
    MatDialogModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
  ],
  providers: [EmailSettingsService],
  bootstrap: [AppComponent],
  entryComponents: [EmailFormatDialog]
})
export class AppModule {}
