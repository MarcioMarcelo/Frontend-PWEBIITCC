import { Router, RouterModule } from '@angular/router';
import { SemaforosService } from '../../../services/semaforos.service';
import { ISemaforo } from './../../model/ISemaforo.model';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cadastrarsemaforo',
  templateUrl: './cadastrarsemaforo.component.html',
  styleUrls: ['./cadastrarsemaforo.component.css']
})
export class CadastrarsemaforoComponent implements OnInit {

    semaforo: ISemaforo = {
      nome: '',
      adicionado: new Date(),
    }
  constructor(private semaforosService:SemaforosService, private RouterModule: Router) {}
  ngOnInit(): void {}

  salvarSemaforo(): void {
    this.semaforosService.cadastrar(this.semaforo).subscribe(retorno => {
      this.semaforo = retorno;
      this.semaforosService.exibirMensagem(
        'Sistema',
        `${this.semaforo.nome} foi cadastrado com sucesso. ID: ${this.semaforo.id}`,
        'toast-success'
      );
      this.RouterModule.navigate(['/semaforos']);
    });

  }
}
