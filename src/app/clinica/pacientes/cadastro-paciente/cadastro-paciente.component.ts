import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit {

  form: FormGroup
  public show = true;

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      dtCriacao: [null],
      telefone: [null],
      dtNascimento: [null],
      endereco: [null],
    });
  }

  ngOnInit(): void {
  }

  cadastroPaciente() {
    this.pacienteService.cadastroPaciente(this.form.value)
      .subscribe(data => this.acaoSucesso(), error => this.acaoErro());
      this.limpaForm();
  }

  private acaoSucesso(){
    this.snackBar.open('Paciente cadastrado com sucesso!', '', {duration: 3000});
  }

  private acaoErro(){
    this.snackBar.open('Erro ao cadastrar paciente.', '', {duration: 3000});
  }

  voltaPagina(){
    this.location.back();
  }

  limpaForm(){
    this.form.reset()
  }


}
