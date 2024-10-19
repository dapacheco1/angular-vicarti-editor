import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';




@Component({
  selector: 'vicarti-menu-widget',
  standalone: true,
  imports: [],
  templateUrl: './menu-widget.component.html',
  styleUrl: './menu-widget.component.scss'
})
export class MenuWidgetComponent implements AfterViewInit{
  public hardcodedMenu:Array<{
    label:string,
    url:string,
    subitems:Array<{
      label:string,
      url:string,
    }>
  }> = [
    {
      label:'Nuestro Instituto',
      url:'',
      subitems:[
        {
          label:'Quienes somos',
          url:'quienes-somos'
        }
      ]
    },
    {
      label:'Conoce nuestra oferta academica',
      url:'',
      subitems:[
        {
          label:'Modalidades',
          url:'modalidades'
        }
      ],
    },
    {
      label:'Beneficios de estudiar con nosotros',
      url:'',
      subitems:[
        {
          label:'Campus',
          url:'campus'
        }
      ]
    }
  ];
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    
  }
}
