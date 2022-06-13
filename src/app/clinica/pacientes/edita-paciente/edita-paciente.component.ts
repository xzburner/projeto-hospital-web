import { Location } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { PacientesService } from '../../services/pacientes.service';
import { Paciente } from './../../_model/paciente';

@Component({
  selector: 'app-cadastra-edita-paciente',
  templateUrl: './edita-paciente.component.html',
  styleUrls: ['./edita-paciente.component.scss']
})
export class EditaPacienteComponent implements OnInit {

  form: FormGroup

  paciente: Paciente = {
    id: '',
    nome: '',
    cpf: '',
    dtCriacao: '',
    telefone: '',
    dtNascimento: '',
    endereco: '',
  }
  ;

  constructor(
    private pacienteService: PacientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder

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
    this.listaPeloId();
  }

  listaPeloId(): void {
    this.pacienteService.listarPeloId(this.paciente.id).subscribe((response) => {
      this.paciente.nome = response.nome
      this.paciente.cpf = response.cpf
      this.paciente.dtNascimento = response.dtNascimento
      this.paciente.endereco = response.endereco
      this.paciente.telefone = response.telefone
    })
  }

  capturaId() {
    this.paciente.id = this.route.snapshot.paramMap.get('id')!
  }

  atualizaPaciente(): void {
    this.pacienteService.atualizaPaciente(this.paciente).subscribe((response) =>
      this.acaoSucesso(), error => this.acaoErro());
  }

  private acaoSucesso() {
    this.snackBar.open('Paciente alterado com sucesso!', 'Fechar', { duration: 3000 });
    this.voltaPagina();
  }

  private acaoErro() {
    this.snackBar.open('Erro ao alterar paciente.', 'Fechar', { duration: 3000 });
  }

  voltaPagina() {
    this.location.back();
  }


  // limpaForm() {
  //   this.form.reset()
  // }



  // preencheFormulario(paciente: any) {
  //   this.form.patchValue({
  //     id: paciente.id,
  //     nome: paciente.nome,
  //     cpf: paciente.cpf,
  //     telefone: paciente.telefone,
  //     dtNascimento: paciente.dtNascimento,
  //     endereco: paciente.endereco
  //   })
  // }


}
