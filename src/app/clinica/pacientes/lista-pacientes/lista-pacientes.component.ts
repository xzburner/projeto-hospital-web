import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorDialogComponent } from './../../../_utils/components/error-dialog/error-dialog.component';
import { Paciente } from './../../_model/paciente';
import { PacientesService } from './../../services/pacientes.service';
import { ModalDeletaPacienteComponent } from './../modal-deleta-paciente/modal-deleta-paciente.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {


  displayedColumns = ['nome','cpf','telefone', 'dtNascimento', 'endereco', 'dtCriacao', 'acoes'];
  dataSource = new MatTableDataSource<Paciente>();
  pacientes: Paciente[] = [];


  constructor(
    private pacientesService: PacientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {
    this.listaPacientes();
  }

  listaPacientes(){
    this.pacientesService.listaPacientes().subscribe(response => this.pacientes = response,
      error => this.acaoErro()
      );
  }

  abrirModalDeletar(pacienteID: Paciente) {
		const dialogRef = this.dialog.open(ModalDeletaPacienteComponent, {
			data: pacienteID
		});
		dialogRef.afterClosed().subscribe(result => {
		});
	}

  voltaPagina(){
    this.location.back();
  }

  private acaoErro(){
    this.snackBar.open('Erro ao listar pacientes.', '', {duration: 3000});
  }

}






