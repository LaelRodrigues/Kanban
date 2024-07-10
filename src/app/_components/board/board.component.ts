import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [MatCardModule, ColumnComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
