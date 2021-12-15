import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  public todo: Itodo = {
    id: 0,
    title: '',
    description: '',
    isCompleted: false,
    isArchived: false,
    endDate: new Date(),
    selected: false,
  };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSingleTodo().subscribe((data) => {
        this.todo = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onCompleteTodo() {
    this.todo.isCompleted = true;
  }

  public onArchiveTodo() {
    this.todo.isArchived = true;
  }
}
