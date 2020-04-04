import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProfileComponent } from './medical-profile.component';

describe('MedicalProfileComponent', () => {
  let component: MedicalProfileComponent;
  let fixture: ComponentFixture<MedicalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
