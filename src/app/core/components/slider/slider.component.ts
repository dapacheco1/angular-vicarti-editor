import { DOCUMENT } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, signal } from '@angular/core';
// import function to register Swiper custom elements
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'vicarti-slider',
  standalone: true,
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit{
  public gallery:Array<{url:string, cardTitle:string, cardBigText:string, cardHashtag:string,buttonText:string, urlButton:string,}> = [
    {
      url:'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
      cardTitle:'Fortalece tu futuro',
      cardBigText:'Escuela de Tecnologías',
      cardHashtag:'#FortaleceTuPropiaHistoria',
      buttonText:'CONOCE MÁS',
      urlButton:'/about',
    },
    {
      url:'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg',
      cardTitle:'Fortalece tu futuro',
      cardBigText:'Escuela de Tecnologías',
      cardHashtag:'#FortaleceTuPropiaHistoria',
      buttonText:'CONOCE MÁS',
      urlButton:'/about',
    },
    {
      url:'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      cardTitle:'Fortalece tu futuro',
      cardBigText:'Escuela de Tecnologías',
      cardHashtag:'#FortaleceTuPropiaHistoria',
      buttonText:'CONOCE MÁS',
      urlButton:'/about',
    },
    {
      url:'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg',
      cardTitle:'Fortalece tu futuro',
      cardBigText:'Escuela de Tecnologías',
      cardHashtag:'#FortaleceTuPropiaHistoria',
      buttonText:'CONOCE MÁS',
      urlButton:'/about',
    },
    {
      url:'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
      cardTitle:'Fortalece tu futuro',
      cardBigText:'Escuela de Tecnologías',
      cardHashtag:'#FortaleceTuPropiaHistoria',
      buttonText:'CONOCE MÁS',
      urlButton:'/about',
    }
  ];

  public swiperElement = signal<SwiperContainer | null>(null);
  constructor(@Inject(DOCUMENT) private document: Document){}
  ngOnInit(): void {
    const swiperElementConstructor = this.document.querySelector('swiper-container');
    const swiperOptions:SwiperOptions = {
      slidesPerView: 1,
      loop:true,
      pagination:{
        enabled:true,
        clickable:true,
      }
      
    };
    Object.assign(swiperElementConstructor!,swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
