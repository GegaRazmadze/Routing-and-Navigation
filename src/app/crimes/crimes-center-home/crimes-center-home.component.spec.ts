import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimesCenterHomeComponent } from './crimes-center-home.component';

describe('CrimesCenterHomeComponent', () => {
  let component: CrimesCenterHomeComponent;
  let fixture: ComponentFixture<CrimesCenterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimesCenterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimesCenterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
