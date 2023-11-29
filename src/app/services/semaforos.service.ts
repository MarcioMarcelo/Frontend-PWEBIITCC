import { ISemaforo } from '../components/model/ISemaforo.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';


@Injectable({
  providedIn: 'root'
})
export class SemaforosService {
  private URL: string = 'http://localhost:3000/semaforos';

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  buscarTodos(): Observable<ISemaforo[]>{
    return this.http.get<ISemaforo[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  buscarPorId(id: number): Observable<ISemaforo> {
    return this.http.get<ISemaforo>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  cadastrar(semaforo: ISemaforo): Observable<ISemaforo> {
    return this.http.post<ISemaforo>(this.URL, semaforo).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  atualizar(semaforo: ISemaforo): Observable<ISemaforo> {
    return this.http.put<ISemaforo>(`${this.URL}/${semaforo.id}`,semaforo).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  excluir(id: number): Observable<ISemaforo> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro)));

  }

  exibirErro(e: any): Observable<any>{
    this.exibirMensagem('Erro!', 'Não foi possivel realizar a operação', 'toast-error')
    return EMPTY;

  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, {closeButton:true, progressBar:true}, tipo);
  }



}
