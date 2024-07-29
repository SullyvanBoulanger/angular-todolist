import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'digi-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() task = '';
  @Input() id = -1;

  constructor(private todoService: TodoService) {}

  deleteTask(): void {
    this.todoService.deleteTask(this.id);
  }
}
