import { Component } from "@angular/core";
import { MenuToPreviewService } from "../../menu-to-preview.service";
import { DbAccessService } from "../../db-access.service";

@Component({
  selector: "app-style-menu",
  templateUrl: `style-menu.component.html`,
  styleUrls: ["style-menu.component.css"],
})
export class StyleMenuComponent {
  mainTitleInput: string = "This is the main title";
  subtitleInput: string = "This is the subtitle";
  firstNmIsRequired: boolean = false;
  lastNmIsRequired: boolean = false;
  buttonInput: string = "Submit";
  selectedColor: string = "#4655c3";

  constructor(
    private menuToPreviewService: MenuToPreviewService,
    private dbAccessService: DbAccessService
  ) {
    this.menuToPreviewService.setMainTitle(this.mainTitleInput);
    this.menuToPreviewService.setSubtitle(this.subtitleInput);
    this.menuToPreviewService.setButton(this.buttonInput);
  }

  updateMainTitle() {
    this.menuToPreviewService.setMainTitle(this.mainTitleInput);
  }

  updateSubtitle() {
    this.menuToPreviewService.setSubtitle(this.subtitleInput);
  }

  updateFirstNmIsRequired() {
    this.menuToPreviewService.setFirstNmIsRequired(this.firstNmIsRequired);
  }

  updateLastNmIsRequired() {
    this.menuToPreviewService.setLastNmIsRequired(this.lastNmIsRequired);
  }

  updateButton() {
    this.menuToPreviewService.setButton(this.buttonInput);
  }

  hexColor() {
    this.menuToPreviewService.setSelectedColor(this.selectedColor);
  }

  // Pass Data to db
  saveUserData() {
    const userData = {
      mainTitle: this.mainTitleInput,
      subtitle: this.subtitleInput,
      buttonText: this.buttonInput,
      buttonColor: this.selectedColor,
    };

    this.dbAccessService.saveDataToDatabase(userData).subscribe(
      (response) => {
        console.log("Data saved successfully:", response);
      },
      (error) => {
        console.error("Error saving data:", error);
      }
    );
  }
}
