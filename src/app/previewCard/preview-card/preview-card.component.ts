import { Component } from "@angular/core";
import { MenuToPreviewService } from "../../menu-to-preview.service";

@Component({
  selector: "app-preview-card",
  templateUrl: `./preview-card.component.html`,
  styleUrls: ["./preview-card.component.css"],
})
export class PreviewCardComponent {
  mainTitle: string = "";
  subtitle: string = "";
  button: string = "";
  firstNmIsRequired: boolean = false;
  lastNmIsRequired: boolean = false;
  selectedColor: string = "";

  constructor(private menuToPreviewService: MenuToPreviewService) {
    this.menuToPreviewService.getMainTitle().subscribe((title) => {
      this.mainTitle = title;
    });
    this.menuToPreviewService.getSubtitle().subscribe((title) => {
      this.subtitle = title;
    });
    this.menuToPreviewService.getFirstNmIsRequired().subscribe((isRequired) => {
      this.firstNmIsRequired = isRequired;
    });
    this.menuToPreviewService.getLastNmIsRequired().subscribe((isRequired) => {
      this.lastNmIsRequired = isRequired;
    });
    this.menuToPreviewService.getButton().subscribe((btn) => {
      this.button = btn;
    });
    this.menuToPreviewService.getSelectedColor().subscribe((color) => {
      this.selectedColor = color;
    });
  }
}
