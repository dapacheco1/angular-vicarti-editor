import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ShortcutWidgetComponent } from './core/components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from "./core/components/menu-widget/menu-widget.component";
import { SliderComponent } from "./core/components/slider/slider.component";
import { SearcherComponent } from "./core/components/searcher/searcher.component";
import { GridColumnsComponent } from "./core/components/grid-columns/grid-columns.component";
import { ContentSliderComponent } from "./core/components/content-slider/content-slider.component";
import { FooterComponent } from "./core/components/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzButtonModule, ShortcutWidgetComponent, MenuWidgetComponent, SliderComponent, SearcherComponent, GridColumnsComponent, ContentSliderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-vicarti-editor';
}
