import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CdkDrag, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;

  @Input() columnIndex!: number;
  @Input() taskIndex!: number;

  @Output() editTask = new EventEmitter<{ columnIndex: number, taskIndex: number }>();
  @Output() deleteTask = new EventEmitter<{ columnIndex: number, taskIndex: number }>();

  onEditTask() {
    this.editTask.emit({ columnIndex: this.columnIndex, taskIndex: this.taskIndex });
  }

  onDeleteTask() {
    this.deleteTask.emit({ columnIndex: this.columnIndex, taskIndex: this.taskIndex });
  }

}
