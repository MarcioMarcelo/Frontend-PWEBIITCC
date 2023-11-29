import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-semaforo',
  templateUrl: './card-semaforo.component.html',
  styleUrls: ['./card-semaforo.component.css']
})
export class CardSemaforoComponent implements OnInit {
  @Input() foto: string = '';
  @Input() nomeSemaforo: string = '';
  @Input() idSemaforo: number = 0;
  @Input() dataAdicionado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
