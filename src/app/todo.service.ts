import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  subjectTasks = new BehaviorSubject<string[]>([]);
  #tasks: string[] = [];

  constructor() {}

  addTask(task: string): void {
    this.#tasks.push(task);
    this.subjectTasks.next(this.#tasks);
  }

  deleteTask(id: number): void {
    this.#tasks = this.#tasks.filter((_task, taskId) => taskId != id);
    this.subjectTasks.next(this.#tasks);
  }
}
