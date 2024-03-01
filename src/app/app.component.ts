import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { ColorContrastComponent } from './color-contrast/color-contrast.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { CopyToClipboardButtonComponent } from './copy-to-clipboard-button/copy-to-clipboard-button.component';
import { MetadataComponent } from './metadata/metadata.component';
import { PaletteTableComponent } from './palette-table/palette-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AlertComponent,
    ColorContrastComponent,
    ColorPickerComponent,
    ColorSliderComponent,
    CopyToClipboardButtonComponent,
    MetadataComponent,
    PaletteTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cpqi-holding';
}
