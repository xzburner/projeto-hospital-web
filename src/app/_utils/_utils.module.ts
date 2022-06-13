import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ClinicaModule } from '../clinica/clinica.module';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ErrorDialogComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ClinicaModule,
    AppRoutingModule
  ],
  exports: [
    ErrorDialogComponent,
  ]
})
export class UtilsModule { }
