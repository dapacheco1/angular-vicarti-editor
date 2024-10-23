import { DOCUMENT } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, Input, OnInit, signal } from '@angular/core';
// import function to register Swiper custom elements
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import moment from 'moment';
import { NzIconModule } from 'ng-zorro-antd/icon';
register();
@Component({
  selector: 'vicarti-content-slider',
  standalone: true,
  imports: [NzIconModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './content-slider.component.html',
  styleUrl: './content-slider.component.scss'
})
export class ContentSliderComponent implements OnInit{
  @Input('isNewsSlider') public isNewSlider:boolean = true;
  @Input('sliderHeader') public sliderHeader:string = '';
  @Input('elementId') public elementId:string = 'newsSwiper';
  @Input('hasPagination') public hasPagination:boolean = false;
  public news:Array<{imgUrl:string, title:string, resume:string, date:string, urlNews:string,}> = [
    {
      imgUrl:'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
      title:'Semillero Empresarial',
      resume:'Some content here ...',
      date : moment().format('LL'),
      urlNews: 'news'
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
      title:'Fortalece tu futuro',
      resume:'Escuela de Tecnologías',
      date : moment().format('LL'),
      urlNews: 'news'
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
      title:'Fortalece tu futuro',
      resume:'Escuela de Tecnologías',
      date : moment().format('LL'),
      urlNews: 'news'
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
      title:'Fortalece tu futuro',
      resume:'Escuela de Tecnologías',
      date : moment().format('LL'),
      urlNews: 'news'
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
      title:'Fortalece tu futuro',
      resume:'Escuela de Tecnologías',
      date : moment().format('LL'),
      urlNews: 'news'
    },
    {
      imgUrl:'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
      title:'Fortalece tu futuro',
      resume:'Escuela de Tecnologías',
      date : moment().format('LL'),
      urlNews: 'news'
    },
  ];
  public swiperElement = signal<SwiperContainer | null>(null);
  constructor(@Inject(DOCUMENT) private document: Document){}
  ngOnInit(): void {
    const swiperElementConstructor = this.document.querySelector(`#${this.elementId}`);
    if(swiperElementConstructor){
      const swiperOptions:SwiperOptions = {
        slidesPerView: 3,
        loop:true,
        navigation:{
          enabled:true,
        },
        pagination:{
          enabled: this.hasPagination,
          clickable:true,
        },
        spaceBetween:'24px',
        centeredSlidesBounds: true,
        centeredSlides:true,
      };
      Object.assign(swiperElementConstructor!,swiperOptions);
      this.swiperElement.set(swiperElementConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }
}
