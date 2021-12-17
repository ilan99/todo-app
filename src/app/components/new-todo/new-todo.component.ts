import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  @ViewChild('f') form: any;

  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  public handleSubmit(): void {
    if (this.form.valid) {
      const { value: data } = this.form;
      this.todoService.addNewTodo(data);
      this.dialog.closeAll();
    }
  }
}
