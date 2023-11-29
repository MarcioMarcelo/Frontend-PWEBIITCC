import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SemaforosService } from '../../../services/semaforos.service';
import { ISemaforo } from './../../model/ISemaforo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-semaforo',
  templateUrl: './atualizar-semaforo.component.html',
  styleUrls: ['./atualizar-semaforo.component.css']
})
export class AtualizarSemaforoComponent implements OnInit {


  semaforo: ISemaforo = {
    nome: '',
    adicionado: new Date(),
  }
constructor(
  private semaforosService: SemaforosService,
   private router: Router,
    private activateRouter: ActivatedRoute) {}
ngOnInit(): void {

  const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
  this.semaforosService.buscarPorId(id).subscribe(retorno => {
    this.semaforo = retorno;
  })
}

salvarSemaforo(): void {
  this.semaforosService.atualizar(this.semaforo).subscribe(retorno => {
    this.semaforo = retorno;
    this.semaforosService.exibirMensagem(
      'Sistema',
      `${this.semaforo.nome} foi atualizado com sucesso.`,
      'toast-success'
    );
    this.router.navigate(['/semaforos']);
  });

}
}
