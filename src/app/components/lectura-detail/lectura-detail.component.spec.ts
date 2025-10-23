import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaDetailComponent } from './lectura-detail.component';

describe('LecturaDetailComponent', () => {
  let component: LecturaDetailComponent;
  let fixture: ComponentFixture<LecturaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
