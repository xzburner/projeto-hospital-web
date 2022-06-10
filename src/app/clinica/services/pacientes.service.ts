import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../_model/paciente';
import { first, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private readonly API = '/assets/pacientes.json'

  constructor(private httpClient: HttpClient) { }

  listaPacientes() {
    return this.httpClient.get<Paciente[]>(this.API)
      .pipe(
        first(),
        delay(3000),
        tap(pacientes => console.log(pacientes))
      );
  }
}
