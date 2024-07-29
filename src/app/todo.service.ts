import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private subjectTasks = new BehaviorSubject<Task[]>([]);
  private tasks: Task[] = [];
  private id = 1;

  constructor() {}

  getTasks(): Observable<Task[]> {
    return this.subjectTasks.asObservable();
  }

  addTask(name: string, priority: string): void {
    const task: Task = {
      id: this.id++,
      name,
      done: false,
      priority,
    };

    this.tasks.push(task);
    this.subjectTasks.next(this.tasks);
  }

  toggleTask(id: number) {
    const index = this.tasks.indexOf(
      this.tasks.filter((task) => task.id === id)[0]
    );
    this.tasks[index].done = !this.tasks[index].done;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.subjectTasks.next(this.tasks);
  }
}
