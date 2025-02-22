import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Observable, tap } from 'rxjs';
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
  tasks$: Observable<Task[]> = new Observable();
  filterActive = true;
  filterDone = true;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.tasks$ = this.todoService.getTasks();
  }

  hideTask(task: Task): boolean {
    return !(
      (this.filterActive == true && task.done == false) ||
      (this.filterDone == true && task.done == true)
    );
  }

  onToggleTaskCompletion(id: string) {
    this.todoService.toggleTask(id);
  }

  onDelete(id: string) {
    this.todoService.deleteTask(id);
  }

  onToggleFilterActive() {
    this.filterActive = !this.filterActive;
  }

  onToggleFilterDone() {
    this.filterDone = !this.filterDone;
  }
}
