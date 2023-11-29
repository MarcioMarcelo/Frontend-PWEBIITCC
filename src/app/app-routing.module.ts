import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarsemaforoComponent } from './components/semaforos/cadastrarsemaforo/cadastrarsemaforo.component';
import { ListarsemaforosComponent } from './components/semaforos/listarsemaforos/listarsemaforos.component';
import { HomeComponent } from './components/home/home.component';
import { AtualizarSemaforoComponent } from './components/semaforos/atualizar-semaforo/atualizar-semaforo.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'semaforos', component:ListarsemaforosComponent},
  {path:'semaforos/cadastrar', component:CadastrarsemaforoComponent},
  {path:'semaforos/atualizar/:id', component:AtualizarSemaforoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

