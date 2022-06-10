import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilsModule } from '../_utils/_utils.module';
import { AppMaterialModule } from '../_utils/app-material/app-material.module';
import { ClinicaRoutingModule } from './clinica-routing.module';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';




@NgModule({
  declarations: [
    MedicosComponent,
    HomeComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ClinicaRoutingModule,
    AppMaterialModule,
    UtilsModule
  ]
})
export class ClinicaModule { }
