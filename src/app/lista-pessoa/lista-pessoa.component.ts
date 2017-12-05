import { PessoaServiceService } from './pessoa-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaServiceService]
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string[];
  nome: string = "Marcondes";

  constructor(private service: PessoaServiceService) { 
    this.pessoas = service.getPessoas();
  }

  ngOnInit() {
  }

  listar(){
    
  }
  enviarNome(){
    this.service.setPessoa(this.nome);
  }

}
