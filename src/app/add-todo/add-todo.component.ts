import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'digi-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  newTask = '';
  priority = '';

  constructor(private todoService: TodoService) {}

  addTask(): void {
    this.todoService.addTask(this.newTask, this.priority);
  }
}
