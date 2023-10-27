import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { HeaderComponent } from "./header/header/header.component";
import { PreviewCardComponent } from "./previewCard/preview-card/preview-card.component";
import { StyleMenuComponent } from "./styleMenu/style-menu/style-menu.component";
import { ColorPickerModule } from "ngx-color-picker";
import { FormsModule } from "@angular/forms";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatButtonModule } from "@angular/material/button";
import { FooterComponent } from "./footer/footer.component";
import { MenuToPreviewService } from "./menu-to-preview.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreviewCardComponent,
    StyleMenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    ColorPickerModule,
    FormsModule,
    MatButtonToggleModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [MenuToPreviewService],
  bootstrap: [AppComponent],
})
export class AppModule {}
