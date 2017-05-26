<<<<<<< HEAD
import { Component, ViewEncapsulation } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'az-todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ TodoService ]
})

export class TodoComponent {
    public todoList:Array<any>;
    public newTodoText:string = '';

    constructor( private _todoService:TodoService) {
        this.todoList = this._todoService.getTodoList();
    }

    public  getNotDeleted() {
        return this.todoList.filter((item:any) => {
            return !item.deleted
        })
    }


    public addToDoItem($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText
            });
            this.newTodoText = '';
        }
    }

}
=======
import { Component, ViewEncapsulation } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'az-todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ TodoService ]
})

export class TodoComponent {
    public todoList:Array<any>;
    public newTodoText:string = '';

    constructor( private _todoService:TodoService) {
        this.todoList = this._todoService.getTodoList();
    }

    public  getNotDeleted() {
        return this.todoList.filter((item:any) => {
            return !item.deleted
        })
    }


    public addToDoItem($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText
            });
            this.newTodoText = '';
        }
    }

}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
