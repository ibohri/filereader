import { Router } from "@angular/router";
import { EmailSettingsService } from "./../settings.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormErrorStateMatcher } from "src/app/error-state-matcher";

@Component({
  selector: "app-settings-form",
  templateUrl: "./settings-form.component.html",
  styleUrls: ["./settings-form.component.css"]
})
export class SettingsFormComponent implements OnInit {
  note = "Add column name in {} for ex: {column_name}";
  hide = true;
  settings = {};
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  matcher = new FormErrorStateMatcher();

  constructor(
    private emailSettingService: EmailSettingsService,
    private rouuter: Router
  ) {}

  ngOnInit() {
    this.emailSettingService
      .getSettings()
      .subscribe(settings => (this.settings = settings));
  }

  onCancelClick() {}
  updateSettings(settingsForm: NgForm) {
    this.emailSettingService.updateSettings(settingsForm.value).subscribe();
  }
}
