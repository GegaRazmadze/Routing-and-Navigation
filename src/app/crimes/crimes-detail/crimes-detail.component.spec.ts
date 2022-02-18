import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimesDetailComponent } from './crimes-detail.component';

describe('CrimesDetailComponent', () => {
  let component: CrimesDetailComponent;
  let fixture: ComponentFixture<CrimesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
