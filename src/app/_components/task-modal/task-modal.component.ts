import { Task } from './../../model/task';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, FormsModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {

  task: Task

  constructor(public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }) {
    this.task = data?.task ? { ...data.task } : { title: '', description: '', date: new Date() };
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.dialogRef.close(this.task);
  }
}
