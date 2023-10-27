import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DbAccessService {
  // private apiUrl = "http://localhost:3000/widgets";
  private saveUrl = "http://localhost:3000/widgets";

  constructor(private http: HttpClient) {}

  saveDataToDatabase(data: any) {
    return this.http.post(this.saveUrl, data);
  }
}
