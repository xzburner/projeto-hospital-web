import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicaModule } from './clinica/clinica.module';
import { AppMaterialModule } from './_utils/app-material/app-material.module';
import { UtilsModule } from './_utils/_utils.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClinicaModule,
    UtilsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
