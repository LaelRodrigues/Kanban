import { TaskService } from './../../service/task.service';
import { Column } from './../../model/column';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../model/task';
import { ColumnModalComponent } from '../column-modal/column-modal.component';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { ColumnService } from '../../service/column.service';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, TaskComponent, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {

  columns: Column[] = [];

  constructor(
    private columnService: ColumnService,
    private taskService: TaskService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.columns = this.columnService.getColumns();
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addColumn(title: string) {
    this.columnService.addColumn(title);
    this.columns = this.columnService.getColumns();
  }

  deleteColumn(index: number) {
    this.columnService.deleteColumn(index);
    this.columns = this.columnService.getColumns();
  }

  openAddColumnModal(): void {
    const dialogRef = this.dialog.open(ColumnModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addColumn(result);
      }
    });
  }

  openAddTaskModal(columnIndex: number): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((newTask: Task) => {
      if (newTask) {
        this.taskService.addTask(newTask, columnIndex);
      }
    });
  }

  editTask(columnIndex: number, taskIndex: number) {
    const task = this.columns[columnIndex].tasks[taskIndex];
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
      data: { task }
    });

    dialogRef.afterClosed().subscribe(updatedTask => {
      if (updatedTask) {
        this.taskService.updateTask(columnIndex, taskIndex, updatedTask);
      }
    });
  }

  deleteTask(columnIndex: number, taskIndex: number) {
    this.taskService.deleteTask(columnIndex, taskIndex);
  }
}
