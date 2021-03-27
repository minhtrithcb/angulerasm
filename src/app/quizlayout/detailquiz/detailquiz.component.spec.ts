import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailquizComponent } from './detailquiz.component';

describe('DetailquizComponent', () => {
  let component: DetailquizComponent;
  let fixture: ComponentFixture<DetailquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
