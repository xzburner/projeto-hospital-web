import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../_model/paciente';
import { first, tap, delay, Observable } from 'rxjs';

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

  deletaPaciente(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
    .pipe(first());
  }

  listarPeloId(id: string): Observable<Paciente>{
    const url = `${this.API}/editar/${id}`
    return this.httpClient.get<Paciente>(url)
    .pipe(first());
  }

 atualizaPaciente(paciente: Paciente):Observable<void>{
    const url = `${this.API}/editar/${paciente.id}`
    return this.httpClient.put<void>(url, paciente);
 }

// atualizaPaciente(body: Paciente): Observable<any> {
//   return this.httpClient.put(`${this.API}/produtos`, body, { observe: "response" });
// }

}


