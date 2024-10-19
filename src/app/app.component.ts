import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ShortcutWidgetComponent } from './core/components/shortcut-widget/shortcut-widget.component';
import { MenuWidgetComponent } from "./core/components/menu-widget/menu-widget.component";
import { SliderComponent } from "./core/components/slider/slider.component";
import { SearcherComponent } from "./core/components/searcher/searcher.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzButtonModule, ShortcutWidgetComponent, MenuWidgetComponent, SliderComponent, SearcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-vicarti-editor';
}
