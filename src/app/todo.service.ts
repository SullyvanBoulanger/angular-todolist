import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private subjectTasks = new BehaviorSubject<Task[]>([]);
  private tasks: Task[] = [];
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private httpClient: HttpClient) {
    this.httpGetTasks();
  }

  getTasks(): Observable<Task[]> {
    return this.subjectTasks.asObservable();
  }

  addTask(name: string, priority: string): void {
    const task = {
      name,
      done: false,
      priority,
    };

    this.httpClient
      .post<void>(this.apiUrl, task)
      .subscribe(() => this.httpGetTasks());
  }

  toggleTask(id: string) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.done = !task.done;
      this.httpClient
        .put(`${this.apiUrl}/${task.id}`, task)
        .subscribe(this.httpGetTasks);
    }
  }

  deleteTask(id: string): void {
    this.httpClient
      .delete(`${this.apiUrl}/${id}`)
      .subscribe(() => this.httpGetTasks());
  }

  // getTasks(): Observable<Task[]> {
  //   return this.subjectTasks.asObservable();
  // }

  // addTask(name: string, priority: string): void {
  //   const task: Task = {
  //     id: this.id++,
  //     name,
  //     done: false,
  //     priority,
  //   };

  //   this.tasks.push(task);
  //   this.subjectTasks.next(this.tasks);
  // }

  // toggleTask(id: string) {
  //   this.tasks = this.tasks.map((task) =>
  //     task.id === id ? { ...task, done: !task.done } : task
  //   );
  //   this.subjectTasks.next(this.tasks);
  // }

  // deleteTask(id: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id != id);
  //   this.subjectTasks.next(this.tasks);
  // }

  private httpGetTasks(): void {
    this.httpClient.get<Task[]>(this.apiUrl).subscribe((tasks) => {
      this.tasks = tasks;
      this.subjectTasks.next(this.tasks);
    });
  }
}
