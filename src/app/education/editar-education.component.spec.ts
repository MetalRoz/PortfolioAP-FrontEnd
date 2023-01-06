import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEducationComponent } from './editar-education.component';

describe('EditarEducationComponent', () => {
  let component: EditarEducationComponent;
  let fixture: ComponentFixture<EditarEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
