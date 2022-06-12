import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilsModule } from '../_utils/_utils.module';
import { AppMaterialModule } from '../_utils/app-material/app-material.module';
import { ClinicaRoutingModule } from './clinica-routing.module';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { CadastroPacienteComponent } from './pacientes/cadastro-paciente/cadastro-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';




@NgModule({
  declarations: [
    MedicosComponent,
    HomeComponent,
    CadastroPacienteComponent,
    ListaPacientesComponent
  ],
  imports: [
    CommonModule,
    ClinicaRoutingModule,
    AppMaterialModule,
    UtilsModule,
    ReactiveFormsModule
  ]
})
export class ClinicaModule { }
