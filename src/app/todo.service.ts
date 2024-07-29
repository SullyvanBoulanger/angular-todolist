import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private subjectTasks = new BehaviorSubject<string[]>([]);
  private tasks: string[] = [];

  constructor() {}

  getTasks(): Observable<string[]> {
    return this.subjectTasks.asObservable();
  }

  addTask(task: string): void {
    this.tasks.push(task);
    this.subjectTasks.next(this.tasks);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((_task, taskId) => taskId != id);
    this.subjectTasks.next(this.tasks);
  }
}
