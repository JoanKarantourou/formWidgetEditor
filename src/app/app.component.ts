import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<app-header></app-header>
    <div class="container my-3 d-flex justify-content-center">
      <app-style-menu class="col-4"></app-style-menu>
      <app-preview-card class="col-8"></app-preview-card>
    </div>
    <app-footer></app-footer> `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "widget";
}
