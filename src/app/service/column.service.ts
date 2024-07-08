import { Injectable } from '@angular/core';
import { Column } from '../model/column';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  private columns: Column[] = [
    {
      title: 'A fazer',
      tasks: [
        { title: 'Criar Layout Base', description: 'Desenvolver o esqueleto da interface de usuário usando HTML e CSS', date: new Date('2024-07-01') },
        { title: 'Definir Estrutura do Projeto', description: ' Estabelecer a arquitetura de pastas e módulos da aplicação front-end', date: new Date('2024-07-02') }
      ]
    },
    {
      title: 'Fazendo',
      tasks: [
        { title: 'Desenvolver Página Inicial', description: 'Implementar a página inicial da aplicação ', date: new Date('2024-06-30') },
        { title: 'Estilizar Componentes', description: ' Refinar estilos CSS/SCSS dos componentes', date: new Date('2024-06-29') }
      ]
    }
  ];

  getColumns(): Column[] {
    return this.columns;
  }

  addColumn(title: string): void {
    this.columns.push({ title, tasks: [] });
  }

  deleteColumn(index: number): void {
    this.columns.splice(index, 1);
  }

  getColumn(index: number): Column {
    return this.columns[index];
  }
}
