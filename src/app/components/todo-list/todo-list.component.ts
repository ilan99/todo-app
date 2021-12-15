import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todos: Array<Itodo> = [];
  private _prevIndex = 0;

  private subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodos().subscribe((data) => (this.todos = [...data]))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onTodoClick(todo: Itodo, index: number): void {
    this.todoService.setSingleTodo(todo);
    this.todos[this._prevIndex].selected = false;
    this.todos[index].selected = true;
    this._prevIndex = index;
  }
}
