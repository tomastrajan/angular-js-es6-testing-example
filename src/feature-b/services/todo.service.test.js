import { assert } from 'chai';

import TodoService from './todo.service.js';

let service;

describe('TodoService', function() {

    beforeEach(function() {
        let initialTodos = [];
        service = new TodoService(initialTodos);
    });

    it('should contain empty todos after initialization', function () {
        assert.equal(service.todos.length, 0);
    });

    it('should add todo', function () {
        service.addTodo('Finish example project');
        assert.equal(service.todos.length, 1);
        assert.equal(service.todos[0].label, 'Finish example project');
        assert.equal(service.todos[0].done, false);
    });

    it('should toggle todo', function () {
        service.addTodo('Finish example project');
        assert.equal(service.todos[0].done, false);

        service.toggleTodo('Finish example project');
        assert.equal(service.todos[0].done, true);

        service.toggleTodo('Finish example project');
        assert.equal(service.todos[0].done, false);
    });

    it('should remove done todos', function () {
        service.addTodo('Todo1');
        service.addTodo('Todo2');
        service.addTodo('Todo3');
        assert.equal(service.todos.length, 3);

        service.toggleTodo('Todo1');
        service.removeDoneTodos();
        assert.equal(service.todos.length, 2);
    });

});