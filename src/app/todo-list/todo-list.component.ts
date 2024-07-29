import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'digi-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks: string[] = [];

  constructor(private todoService : TodoService){}

  ngOnInit(): void {
    this.todoService.subjectTasks.subscribe((value) => this.tasks = value);
  }
}
