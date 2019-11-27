import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  isAllume = false;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  allumeEteint() {
    this.todoService.loggerTodos();
    this.isAllume = !this.isAllume;
  }
}
