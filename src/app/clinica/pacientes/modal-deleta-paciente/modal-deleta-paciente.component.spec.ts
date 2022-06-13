import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletaPacienteComponent } from './modal-deleta-paciente.component';

describe('ModalDeletaPacienteComponent', () => {
  let component: ModalDeletaPacienteComponent;
  let fixture: ComponentFixture<ModalDeletaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeletaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
