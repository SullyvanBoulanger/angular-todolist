import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';
import { PriorityPipe } from '../priority.pipe';

@Component({
  selector: 'digi-todo-item',
  standalone: true,
  imports: [CommonModule, PriorityPipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() task: Task = {
    id: -1,
    name: '',
    done: false,
    priority: '',
  };
  @Output() toogleCompletion = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onToggleCompletion() {
    this.toogleCompletion.emit(this.task.id)
  }

  onRemove() {
    this.remove.emit(this.task.id);
  }
}
