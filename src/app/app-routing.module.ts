import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarprodutoComponent } from './components/produtos/cadastrarproduto/cadastrarproduto.component';
import { ListarprodutosComponent } from './components/produtos/listarprodutos/listarprodutos.component';
import { HomeComponent } from './components/home/home.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarprodutosComponent},
  {path:'produtos/cadastrar', component:CadastrarprodutoComponent},
  {path:'produtos/atualizar/:id', component:AtualizarProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

