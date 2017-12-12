import { Injectable } from '@angular/core';

@Injectable()
export class MeuLogService {

  setLog(msg:string){
    console.log(msg);
  }

  constructor() { }

}
