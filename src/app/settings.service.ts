import { EmailSetting } from "./settings.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

export interface EmailSetting {
  from: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: "root"
})
export class EmailSettingsService {
  constructor(private http: HttpClient) {}

  public updateSettings(settings: EmailSetting) {
    return this.http.post("api/updatesettings", settings);
  }

  public getSettings(): Observable<EmailSetting> {
    return this.http.get("api/emailsettings") as Observable<EmailSetting>;
  }
}
