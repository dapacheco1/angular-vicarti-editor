import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ShortcutWidgetComponent } from './core/components/shortcut-widget/shortcut-widget.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NzButtonModule,ShortcutWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-vicarti-editor';
}
