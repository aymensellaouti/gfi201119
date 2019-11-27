import { Component, OnInit } from '@angular/core';
import {Todo} from '../Model/todo';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  todo: Todo = new Todo();
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
}
