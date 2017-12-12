import { Injectable } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomesTecService {

  meuLog: MeuLogService;

  getNomesTec(): string []{
    this.meuLog.setLog('consultou o array de tecnologias');
    return ['Angular 2','Typescript','Javascript', 'HTML5', 'CSS3','Desenvolvimento com Angular 2'];
  }

  constructor(meuLog: MeuLogService) {
    this.meuLog = meuLog;
   }

}
