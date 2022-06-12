import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroPacienteComponent } from './pacientes/cadastro-paciente/cadastro-paciente.component';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pacientes', component: ListaPacientesComponent},
  {path: 'pacientes/cadastro', component: CadastroPacienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ClinicaRoutingModule { }
