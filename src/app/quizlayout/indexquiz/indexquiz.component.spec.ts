import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexquizComponent } from './indexquiz.component';

describe('IndexquizComponent', () => {
  let component: IndexquizComponent;
  let fixture: ComponentFixture<IndexquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
