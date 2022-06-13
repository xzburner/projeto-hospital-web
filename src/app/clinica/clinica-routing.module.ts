import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastraPacienteComponent } from './pacientes/cadastra-paciente/cadastra-paciente.component';
import { EditaPacienteComponent } from './pacientes/edita-paciente/edita-paciente.component';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pacientes', component: ListaPacientesComponent},
  {path: 'pacientes/cadastro', component: CadastraPacienteComponent },
  {path: 'pacientes/editar/:id', component: EditaPacienteComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ClinicaRoutingModule { }
