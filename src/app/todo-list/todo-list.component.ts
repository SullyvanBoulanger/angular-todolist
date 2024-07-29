import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'digi-todo-list',
  standalone: true,
  imports: [TodoItemComponent, AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks: Observable<Task[]>;

  constructor(private todoService: TodoService) {
    this.tasks = this.todoService.getTasks();
  }

  onToggleTaskCompletion(id: number) {
    this.todoService.toggleTask(id);
  }

  onDelete(id: number) {
    this.todoService.deleteTask(id);
  }
}
