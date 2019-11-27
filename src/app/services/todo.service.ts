import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [new Todo('lundi', 'angular')];
  constructor(
    private loggerService: LoggerService
  ) { }
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  loggerTodos() {
    this.loggerService.log(this.todos);
  }
}
