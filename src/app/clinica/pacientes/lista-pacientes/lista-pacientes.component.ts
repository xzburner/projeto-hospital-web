import { Location } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorDialogComponent } from './../../../_utils/components/error-dialog/error-dialog.component'
import { Paciente } from './../../_model/paciente';
import { PacientesService } from './../../services/pacientes.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {


  displayedColumns = ['nome','cpf','telefone', 'dtNascimento', 'endereco', 'dtCriacao', 'acoes'];
  dataSource = new MatTableDataSource<Paciente>();
  pacientes: Paciente[] = [];
  public show = false;

  constructor(
    private pacientesService: PacientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.listaPacientes();

  }

  listaPacientes(){
    this.show = false;
    this.pacientesService.listaPacientes().subscribe(response => this.pacientes = response);
    this.show = true;
  }

  openErrorDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  voltaPagina(){
    this.location.back();
  }

}






