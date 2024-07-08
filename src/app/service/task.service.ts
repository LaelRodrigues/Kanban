import { Injectable } from '@angular/core';
import { ColumnService } from './column.service';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private columnService: ColumnService) { }

  addTask(newTask: Task, columnIndex: number): void {
    this.columnService.getColumn(columnIndex).tasks.push(newTask);
  }

  deleteTask(columnIndex: number, taskIndex: number): void {
    this.columnService.getColumn(columnIndex).tasks.splice(taskIndex, 1);
  }

  updateTask(columnIndex: number, taskIndex: number, updatedTask: Task): void {
    this.columnService.getColumn(columnIndex).tasks[taskIndex] = updatedTask;
  }

}
