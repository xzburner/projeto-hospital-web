import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPacienteComponent } from './edita-paciente.component';

describe('EditaPacienteComponent', () => {
  let component: EditaPacienteComponent;
  let fixture: ComponentFixture<EditaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
