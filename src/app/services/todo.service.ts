import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Itodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: Array<Itodo> = [
    {
      id: 1,
      title: 'Java course',
      description: 'Code with Mosh',
      isCompleted: true,
      isArchived: false,
      endDate: new Date('2021-11-05'),
      selected: true,
    },
    {
      id: 2,
      title: 'Angular course',
      description: 'Code with Juda',
      isCompleted: false,
      isArchived: false,
      endDate: new Date('2021-12-31'),
      selected: false,
    },
  ];

  private behaviorSubject: BehaviorSubject<Array<Itodo>> = new BehaviorSubject(
    this._todos
  );

  private singleTodoSubject: BehaviorSubject<Itodo> = new BehaviorSubject(
    this._todos[0]
  );

  constructor() {}

  public getTodos(): Observable<Array<Itodo>> {
    return this.behaviorSubject.asObservable();
  }

  public getSingleTodo(): Observable<Itodo> {
    return this.singleTodoSubject.asObservable();
  }

  public setSingleTodo(todo: Itodo): void {
    this.singleTodoSubject.next(todo);
  }
}
