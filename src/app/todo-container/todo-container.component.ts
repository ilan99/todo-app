import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../components/new-todo/new-todo.component';
import { Subscription } from 'rxjs';
import { Itodo } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  public todos: Itodo[] = [];
  public todo: Itodo = {
    id: 0,
    title: '',
    description: '',
    isCompleted: false,
    isArchived: false,
    endDate: new Date(),
    selected: false,
  };

  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodos().subscribe((data) => (this.todos = [...data]))
    );
    this.subscription.add(
      this.todoService.getSingleTodo().subscribe((data) => {
        this.todo = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
