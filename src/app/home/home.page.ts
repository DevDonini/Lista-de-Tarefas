import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  novaTarefa: string;
  tarefas: string[] = [];

  constructor() { }

  adicionarTarefa() {
    if (this.novaTarefa.trim().length > 0) {
      this.tarefas.push(this.novaTarefa);
      this.novaTarefa = null;
    }
  }

  apagarTarefa(indice){
    this.tarefas.splice(indice,1);
  }
}
