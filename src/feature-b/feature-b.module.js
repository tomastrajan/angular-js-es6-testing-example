import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './feature-b.config.js';
import { DEFAULT_TODOS } from './feature-b.constants.js';

import TodoService from './services/todo.service';
import TodoComponent from './todo-component/todo-component';
import template from './todo-component/todo-component.tpl.html';

export default angular
    .module('main.app.feature-b', [uirouter])
    .config(routing)
    .component('todoComponent', { controller: TodoComponent, template })
    .service('TodoService', TodoService)
    .constant('initialTodos', DEFAULT_TODOS)
    .name;