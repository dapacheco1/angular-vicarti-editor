import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';




@Component({
  selector: 'vicarti-menu-widget',
  standalone: true,
  imports: [NzIconModule],
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
      type:'img' | 'string' | 'empty',
      options:Array<{
        label:string,
        url:string,
      }>
    }>
  }> = [
    {
      label:'Nuestro Instituto',
      url:'',
      subitems:[
        {
          label:'',
          url:'',
          type:'empty',
          options:[],
        },
        {
          label:'image',
          url:'https://www.superarse.edu.ec/imagenes/logo.png',
          type: 'img',
          options:[],
        },
        {
          label:'QUIENES SOMOS',
          url:'quienes-somos',
          type: 'string',
          options:[
            {
              label:'Misión',
              url:'mision',
            },
            {
              label:'Visión',
              url:'vision',
            },
            {
              label:'Autoridades',
              url:'autoridades',
            }
          ],
        },
        {
          label:'INVESTIGACION',
          url:'investigacion',
          type: 'string',
          options:[
            {
              label:'Acerca de',
              url:'acerca-de',
            },
            {
              label:'Revista',
              url:'revista',
            },
            {
              label:'Autoridades',
              url:'autoridades',
            }
          ],
        }
      ]
    },
    {
      label:'Conoce nuestra oferta academica',
      url:'',
      subitems:[
        {
          label:'',
          url:'',
          type:'empty',
          options:[
            
          ],
        },
        {
          label:'Modalidades',
          url:'modalidades',
          type:'string',
          options:[
            {
              label:'Misión',
              url:'mision',
            },
            {
              label:'Visión',
              url:'vision',
            },
            {
              label:'Autoridades',
              url:'autoridades',
            }
          ],
        }
      ],
    },
    {
      label:'Beneficios de estudiar con nosotros',
      url:'',
      subitems:[
        {
          label:'',
          url:'',
          type:'empty',
          options:[],
        },
        {
          label:'Campus',
          url:'campus',
          type:'string',
          options:[
            {
              label:'Misión',
              url:'mision',
            },
            {
              label:'Visión',
              url:'vision',
            },
            {
              label:'Autoridades',
              url:'autoridades',
            }
          ],
        }
      ]
    }
  ];
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    
  }
}
