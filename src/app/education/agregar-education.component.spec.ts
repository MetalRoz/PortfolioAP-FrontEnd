import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEducationComponent } from './agregar-education.component';

describe('AgregarEducationComponent', () => {
  let component: AgregarEducationComponent;
  let fixture: ComponentFixture<AgregarEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
