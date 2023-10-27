import { Component } from "@angular/core";
import { MenuToPreviewService } from "../menu-to-preview.service";
import { DbAccessService } from "../db-access.service";

@Component({
  selector: "app-footer",
  templateUrl: `./footer.component.html`,
  styleUrls: [],
})
export class FooterComponent {
  constructor(
    private menuToPreviewService: MenuToPreviewService,
    private dbAccessService: DbAccessService
  ) {}

  onSaveButtonClick() {
    this.menuToPreviewService.getUserData().subscribe((userData) => {
      this.dbAccessService.saveDataToDatabase(userData).subscribe(
        (response) => {
          console.log("Data saved successfully:", response);
        },
        (error) => {
          console.error("Error saving data:", error);
        }
      );
    });
  }
}
