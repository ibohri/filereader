import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-email-format",
  templateUrl: "./email-format.component.html",
  styleUrls: ["./email-format.component.css"]
})
export class EmailFormatDialog implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EmailFormatDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {}

  ngOnInit() {}
}
