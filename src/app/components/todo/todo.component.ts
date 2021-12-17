import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() public todo: Itodo = {
    id: 0,
    title: '',
    description: '',
    isCompleted: false,
    isArchived: false,
    endDate: new Date(),
    selected: false,
  };

  ngOnInit(): void {}

  public onCompleteTodo() {
    this.todo.isCompleted = true;
  }

  public onArchiveTodo() {
    this.todo.isArchived = true;
  }
}
