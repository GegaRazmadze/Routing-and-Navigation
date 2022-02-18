import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimesCenterComponent } from './crimes-center.component';

describe('CrimesCenterComponent', () => {
  let component: CrimesCenterComponent;
  let fixture: ComponentFixture<CrimesCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimesCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
