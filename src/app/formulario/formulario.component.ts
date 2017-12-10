import { Contatos } from './contatos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('Marcondes', '(99)99999-9999','email@email.com');

  constructor() { }

  ngOnInit() {
  }

}
