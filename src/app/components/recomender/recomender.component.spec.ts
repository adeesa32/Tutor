import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomenderComponent } from './recomender.component';

describe('RecomenderComponent', () => {
  let component: RecomenderComponent;
  let fixture: ComponentFixture<RecomenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
