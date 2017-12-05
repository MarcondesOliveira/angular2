import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomesPessoas: string [] = ['Troll','Zezim','Colosso','Angular'];

  constructor() { }

  getPessoas(): string []{
    return this.nomesPessoas;
  }

  setPessoa(nome: string): void{
    this.nomesPessoas.push(nome);
  }

}
