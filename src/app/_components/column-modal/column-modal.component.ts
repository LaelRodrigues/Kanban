import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { Task } from '../../model/task';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-column-modal',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './column-modal.component.html',
  styleUrl: './column-modal.component.css'
})
export class ColumnModalComponent {

  columnTitle: string = '';

  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.dialogRef.close(this.columnTitle);
  }

}
