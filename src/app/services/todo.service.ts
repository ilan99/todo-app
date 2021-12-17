import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Itodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: Itodo[] = [
    {
      id: 1,
      title: 'Java course',
      description: 'Code with Mosh',
      isCompleted: false,
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

  private _id = this._todos.length ? this._todos[this._todos.length - 1].id : 0;

  private listTodoSubject: BehaviorSubject<Array<Itodo>> = new BehaviorSubject(
    this._todos
  );

  private singleTodoSubject: BehaviorSubject<Itodo | any> = new BehaviorSubject(
    this._todos.length ? this._todos[0] : null
  );

  constructor() {}

  public getTodos(): Observable<Array<Itodo>> {
    return this.listTodoSubject.asObservable();
  }

  public getSingleTodo(): Observable<Itodo> {
    return this.singleTodoSubject.asObservable();
  }

  public setSingleTodo(todo: Itodo): void {
    this.singleTodoSubject.next(todo);
  }

  public addNewTodo(data: any): void {
    const todo: Itodo = {
      id: ++this._id,
      title: data.title,
      description: data.description,
      isCompleted: false,
      isArchived: false,
      endDate: data.endDate,
      selected: false,
    };

    this._todos.push(todo);
    this.listTodoSubject.next(this._todos);
  }
}
