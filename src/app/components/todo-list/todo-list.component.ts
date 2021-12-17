import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  private _prevIndex = 0;

  @Input() public todos: Itodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public onTodoClick(todo: Itodo, index: number): void {
    this.todoService.setSingleTodo(todo);
    this.todos[this._prevIndex].selected = false;
    this.todos[index].selected = true;
    this._prevIndex = index;
  }
}
