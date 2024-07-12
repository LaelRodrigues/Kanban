import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColumnComponent } from './_components/column/column.component';
import { BoardComponent } from './_components/board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerenciamento-projeto';
}
