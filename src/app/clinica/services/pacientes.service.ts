import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../_model/paciente';
import { first, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private readonly API = 'api/pacientes';

  constructor(private httpClient: HttpClient) { }

  listaPacientes() {
    return this.httpClient.get<Paciente[]>(this.API)
      .pipe(
        first(),
        tap(pacientes => console.log(pacientes))
      );
  }

  cadastroPaciente(pacientes: Paciente) {
    return this.httpClient.post<Paciente>(this.API, pacientes)
      .pipe(
        first()
      );
  }
}
