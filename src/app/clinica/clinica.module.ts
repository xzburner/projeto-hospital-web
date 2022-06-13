import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilsModule } from '../_utils/_utils.module';
import { AppMaterialModule } from '../_utils/app-material/app-material.module';
import { ClinicaRoutingModule } from './clinica-routing.module';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { CadastraPacienteComponent } from './pacientes/cadastra-paciente/cadastra-paciente.component';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';
import { ModalDeletaPacienteComponent } from './pacientes/modal-deleta-paciente/modal-deleta-paciente.component';
import { EditaPacienteComponent } from './pacientes/edita-paciente/edita-paciente.component';




@NgModule({
  declarations: [
    MedicosComponent,
    HomeComponent,
    ListaPacientesComponent,
    ListaPacientesComponent,
    ModalDeletaPacienteComponent,
    EditaPacienteComponent,
    CadastraPacienteComponent
  ],
  imports: [
    CommonModule,
    ClinicaRoutingModule,
    AppMaterialModule,
    UtilsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClinicaModule { }
