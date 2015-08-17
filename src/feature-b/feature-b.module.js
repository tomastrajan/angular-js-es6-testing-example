import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './feature-b.config.js';

import todoComponent from './todo-component/todo-component.directive';
import TodoService from './services/todo.service';


export default angular
    .module('main.app.feature-b', [uirouter])
    .config(routing)
    .directive('todoComponent', todoComponent)
    .factory('TodoService', TodoService)
    .name;