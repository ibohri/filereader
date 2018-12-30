import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class EmailSettingsService {
  constructor(private http: HttpClient) {}

  public updateSettings(settings: any) {
    return this.http.post("api/updatesettings", settings);
  }

  public getSettings(): Observable<any> {
    return this.http.get("api/emailsettings");
  }
}
