import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'clinica'},
  {
    path: 'clinica',
    loadChildren: () => import('./clinica/clinica.module').then(m => m.ClinicaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
