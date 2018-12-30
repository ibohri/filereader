import { Subject } from "rxjs/internal/Subject";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FileService {
  private static fileData = [];
  private fileUpdate = new Subject<any>();
  private fileUpdated$ = this.fileUpdate.asObservable();
  constructor(private httpClient: HttpClient) {}

  public updateFileData(data) {
    FileService.fileData = data;
    this.fileUpdate.next(true);
  }

  public onFileUpdate() {
    return this.fileUpdated$;
  }

  public getFileData() {
    return FileService.fileData;
  }

  public sendMail(data) {
    return this.httpClient.post("api/sendMail", data);
  }
}
