import { AlertaService } from './alerta.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular 2';
  foto: string = 'favicon.ico';
  desenvolvimento: string [] = ['Angular 2', 'Javascript', 'Typescript', 'HTML', 'CSS'];
  valor: string;

  constructor(private service: AlertaService){

  }

  enviarMsg(): void{
    this.service.msgAlerta();
  }

  valorPassado(valorPassado){
    this.valor = valorPassado;
  }
  
}
