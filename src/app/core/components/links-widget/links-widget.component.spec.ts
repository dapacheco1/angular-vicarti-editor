import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksWidgetComponent } from './links-widget.component';

describe('LinksWidgetComponent', () => {
  let component: LinksWidgetComponent;
  let fixture: ComponentFixture<LinksWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
