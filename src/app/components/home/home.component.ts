import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeSemaforo: string = 'Semáforo 1';
  idSemaforo: number = 1;
  foto:string = 'assets/img/Semaforo.png';
  dataAdicionado = "2021-12-31";

  constructor()
  {



}



  ngOnInit(): void {
  }

}
