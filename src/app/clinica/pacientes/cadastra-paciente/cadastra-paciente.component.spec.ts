import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPacienteComponent } from './cadastra-paciente.component';

describe('CadastraEditaPacienteComponent', () => {
  let component: CadastraPacienteComponent;
  let fixture: ComponentFixture<CadastraPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
