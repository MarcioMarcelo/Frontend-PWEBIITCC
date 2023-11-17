import { Router, RouterModule } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../model/IProduto.model';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cadastrarproduto',
  templateUrl: './cadastrarproduto.component.html',
  styleUrls: ['./cadastrarproduto.component.css']
})
export class CadastrarprodutoComponent implements OnInit {

    produto: IProduto = {
      nome: '',
      validade: new Date(),
      precoProduto: 0
    }
  constructor(private produtosService:ProdutosService, private RouterModule: Router) {}
  ngOnInit(): void {}

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );
    });

  }
}
