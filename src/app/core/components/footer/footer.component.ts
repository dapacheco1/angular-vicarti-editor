import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'vicarti-footer',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(){}
}
