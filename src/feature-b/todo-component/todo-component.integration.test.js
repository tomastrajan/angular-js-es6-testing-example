import { assert } from 'chai';

import TodoComponent from './todo-component.js';
import TodoService from '../services/todo.service.js';

let component;

describe('TodoComponent with real service (Integration test)', function() {

    beforeEach(function() {
        let initialTodos = [];
        let todoService = new TodoService(initialTodos);
        component = new TodoComponent(todoService);
    });

    it('should contain reference to service\'s todos', function () {
        assert.equal(component.todos.length, 0);
    });

    it('should add todo', function () {
        component.label = 'Finish example project';
        component.addTodo();
        assert.equal(component.label, '');
        assert.equal(component.todos.length, 1);
        assert.equal(component.todos[0].label, 'Finish example project');
        assert.equal(component.todos[0].done, false);
    });

    it('should toggle todo', function () {
        component.label = 'Finish example project';
        component.addTodo();
        assert.equal(component.todos[0].done, false);

        component.toggleTodo(component.todos[0]);
        assert.equal(component.todos[0].done, true);

        component.toggleTodo(component.todos[0]);
        assert.equal(component.todos[0].done, false);
    });

    it('should remove done todos', function () {
        component.label = 'Todo1';
        component.addTodo();

        component.label = 'Todo2';
        component.addTodo();

        component.label = 'Todo2';
        component.addTodo();

        assert.equal(component.todos.length, 3);

        component.toggleTodo(component.todos[0]);
        component.removeDoneTodos();
        assert.equal(component.todos.length, 2);
    });

});