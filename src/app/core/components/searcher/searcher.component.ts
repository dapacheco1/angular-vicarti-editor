import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'vicarti-searcher',
  standalone: true,
  imports: [NzInputModule,NzIconModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent {
  constructor(){}
}
