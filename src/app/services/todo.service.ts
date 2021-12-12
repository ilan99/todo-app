import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: Array<Itodo> = [
    {
      title: 'Java course',
      description: 'Code with Mosh',
      isCompleted: true,
      isArchived: false,
      endDate: new Date('2021-11-05'),
    },
    {
      title: 'Angular course',
      description: 'Code with Juda',
      isCompleted: false,
      isArchived: false,
      endDate: new Date('2021-12-31'),
    },
  ];

  private behaviorSubject: BehaviorSubject<Array<Itodo>> = new BehaviorSubject(
    this._todos
  );

  constructor() {}

  public getTodos(): Observable<Array<Itodo>> {
    return this.behaviorSubject.asObservable();
  }
}
