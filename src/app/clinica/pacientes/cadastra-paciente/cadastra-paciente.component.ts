import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-cadastra-edita-paciente',
  templateUrl: './cadastra-paciente.component.html',
  styleUrls: ['./cadastra-paciente.component.scss']
})
export class CadastraPacienteComponent implements OnInit {

  form: FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      dtCriacao: [null],
      telefone: [null, Validators.required],
      dtNascimento: [null, Validators.required],
      endereco: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.capturaId();

  }

  cadastroPaciente() {
    this.pacienteService.cadastroPaciente(this.form.value)
      .subscribe(data => this.acaoSucesso(), error => this.acaoErro());
  }

  private acaoSucesso() {
    this.snackBar.open('Paciente cadastrado com sucesso!', 'Fechar', { duration: 3000 });
    this.voltaPagina();
  }

  private acaoErro() {
    this.snackBar.open('Erro ao cadastrar paciente.', 'Fechar', { duration: 3000 });
  }

  voltaPagina() {
    this.location.back();
  }

  limpaForm() {
    this.form.reset()
  }

  capturaId() {
    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.pacienteService.listarPeloId(id))
    )
    .subscribe(paciente => this.preencheFormulario(paciente));
  }

  preencheFormulario(paciente: any) {
    this.form.patchValue({
      id: paciente.id,
      nome: paciente.nome,
      cpf: paciente.cpf,
      telefone: paciente.telefone,
      dtNascimento: paciente.dtNascimento,
      endereco: paciente.endereco
    })



  }
}
