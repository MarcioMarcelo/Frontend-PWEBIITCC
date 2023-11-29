import { ISemaforo } from '../../model/ISemaforo.model';
import { SemaforosService } from '../../../services/semaforos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarsemaforos',
  templateUrl: './listarsemaforos.component.html',
  styleUrls: ['./listarsemaforos.component.css']
})
export class ListarsemaforosComponent implements OnInit {

  listaSemaforos: ISemaforo[] = []

  constructor(private semaforosService: SemaforosService) {

  }
  ngOnInit(): void {
    this.carregarSemaforos();
  }
  carregarSemaforos(): void{
    this.semaforosService.buscarTodos().subscribe(retorno =>{
      this.listaSemaforos = retorno;
    })
  }
  deletar(semaforo: ISemaforo): void
  {
    this.semaforosService.excluir(semaforo.id!).subscribe
    (()=>
    {
      this.semaforosService.exibirMensagem
      (
      'SISTEMA',
      `${semaforo.nome} foi excluido com sucesso!`,
      'toast-error'
      )
      }
    )
  }

}
