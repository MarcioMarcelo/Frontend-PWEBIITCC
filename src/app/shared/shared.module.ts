import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSemaforoComponent } from './components/card-semaforo/card-semaforo.component';



@NgModule({
  declarations: [
    CardSemaforoComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports: [CardSemaforoComponent]
})
export class SharedModule { }
