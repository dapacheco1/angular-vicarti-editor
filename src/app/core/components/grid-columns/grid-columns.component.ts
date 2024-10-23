import { Component } from '@angular/core';

@Component({
  selector: 'vicarti-grid-columns',
  standalone: true,
  imports: [],
  templateUrl: './grid-columns.component.html',
  styleUrl: './grid-columns.component.scss'
})
export class GridColumnsComponent {
  public listItems:Array<{iconUrl:string,label:string,labelUrl:string,}> = [
    {
      iconUrl:'https://www.svgrepo.com/show/533811/donuts-cake.svg',
      label:'Some label',
      labelUrl: 'url'
    },
    {
      iconUrl:'https://www.svgrepo.com/show/533811/donuts-cake.svg',
      label:'Some label',
      labelUrl: 'url'
    },
    {
      iconUrl:'https://www.svgrepo.com/show/533811/donuts-cake.svg',
      label:'Some label',
      labelUrl: ''
    },
    {
      iconUrl:'https://www.svgrepo.com/show/533811/donuts-cake.svg',
      label:'Some label',
      labelUrl: 'url'
    },
    {
      iconUrl:'https://www.svgrepo.com/show/533811/donuts-cake.svg',
      label:'Some label',
      labelUrl: ''
    }
  ];
  constructor(){}

}
