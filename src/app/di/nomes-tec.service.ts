import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomesTecService {  

  constructor(@Optional() private meuLog: MeuLogService) {
    this.meuLog = meuLog;
   }

   getNomesTec(): string []{
    if(this.meuLog){
      this.meuLog.setLog('consultou o array de tecnologias');
    }
    return ['Angular 2','Typescript','Javascript', 'HTML5', 'CSS3','Desenvolvimento com Angular 2'];
  }

}
