import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosComponent } from './medicos/medicos.component';

import { PacientesComponent } from './pacientes/pacientes.component';


const routes: Routes = [
  {
    path: '', component: PacientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ClinicaRoutingModule { }
