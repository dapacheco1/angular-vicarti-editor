import { Component } from '@angular/core';

@Component({
  selector: 'vicarti-links-widget',
  standalone: true,
  imports: [],
  templateUrl: './links-widget.component.html',
  styleUrl: './links-widget.component.scss'
})
export class LinksWidgetComponent {
  public menuItems:Array<{label:string,url:string}> = [
    {
      label:'Informacion Financiera',
      url:'informacion-financiera'
    },
    {
      label:'Admisiones',
      url:'admisiones'
    },
    {
      label:'Correo',
      url:'https://portal.office.com'
    },
    {
      label:'Aula Virtual',
      url: 'aula-virtual'
    }
  ];
}
