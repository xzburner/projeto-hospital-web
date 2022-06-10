import { Component, OnInit } from '@angular/core';
import { Paciente } from './../_model/paciente';
import { PacientesService } from './../services/pacientes.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './../../_utils/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes$: Observable<Paciente[]>;
  displayedColumns = ['nome','cpf','telefone', 'dtNascimento', 'endereco']

  constructor(
    private pacientesService: PacientesService,
    public dialog: MatDialog
    ) {
    this.pacientes$ = this.pacientesService.listaPacientes()
    .pipe(
      catchError(error => {
        this.openErrorDialog('Erro ao carregas pacientes.');

        return of([])
      })
    );
  }

  openErrorDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }



}





