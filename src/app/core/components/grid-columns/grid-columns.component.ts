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
      iconUrl:'https://www.svgrepo.com/show/413293/learn.svg',
      label:'Investigación',
      labelUrl: 'url'
    },
    {
      iconUrl:'https://www.svgrepo.com/show/483886/brain-illustration-12.svg',
      label:'Innovación',
      labelUrl: 'url'
    },
    {
      iconUrl:'https://www.svgrepo.com/show/307068/public-people-group-masses.svg',
      label:'Vinculación',
      labelUrl: ''
    },
    {
      iconUrl:'https://www.svgrepo.com/show/308767/open-book-book-guide-publication.svg',
      label:'Calendarios',
      labelUrl: 'url'
    },
    {
      iconUrl:'https://www.svgrepo.com/show/324617/wellness-healthy-health-lifestyle-well-being-health-conscious-management.svg',
      label:'Bienestar',
      labelUrl: ''
    }
  ];
  constructor(){}

}
