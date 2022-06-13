import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventEmitterService } from '../../services/event.service';
import { PacientesService } from './../../services/pacientes.service';

@Component({
  selector: 'app-modal-deleta-paciente',
  templateUrl: './modal-deleta-paciente.component.html',
  styleUrls: ['./modal-deleta-paciente.component.scss']
})
export class ModalDeletaPacienteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private pacienteService: PacientesService,
  @Optional() @Inject(MAT_DIALOG_DATA) public pacienteID: any,
  private snackbar: MatSnackBar,
  private router: Router
  ) { }

  ngOnInit(): void {
  }

  deletar() {
		this.pacienteService.deletaPaciente(this.pacienteID).subscribe(response => {
			EventEmitterService.get('buscar').emit();
			this.snackbar.open("Paciente removido com sucesso!", 'Fechar', { duration: 4000 }), this.recarregarTabela()
		}, (error) => {
			console.log(error);
			this.snackbar.open("Erro ao apagar registro.", 'Fechar', { duration: 4000 })
		})
	}

  recarregarTabela(){
    window.location.reload();
  }



}

