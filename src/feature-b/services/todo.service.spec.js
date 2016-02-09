'use strict';

describe('TodoService', function () {

    var service;

    beforeEach(angular.mock.module('main'));

    beforeEach(angular.mock.module(function ($provide) {
        $provide.constant('initialTodos', []);
    }));

    beforeEach(angular.mock.inject(function (_TodoService_) {
        service = _TodoService_;
    }));

    it('should contain empty todos after initialization', function() {
        expect(service.todos.length).toBe(0);
    });

    it('should add todo', function () {
        service.addTodo('Finish example project');
        expect(service.todos.length).toBe(1);
        expect(service.todos[0].label).toBe('Finish example project');
        expect(service.todos[0].done).toBe(false);
    });

    it('should toggle todo', function () {
        service.addTodo('Finish example project');
        expect(service.todos[0].done).toBe(false);

        service.toggleTodo('Finish example project');
        expect(service.todos[0].done).toBe(true);

        service.toggleTodo('Finish example project');
        expect(service.todos[0].done).toBe(false);
    });

    it('should remove done todos', function () {
        service.addTodo('Todo1');
        service.addTodo('Todo2');
        service.addTodo('Todo3');
        expect(service.todos.length).toBe(3);

        service.toggleTodo('Todo1');
        service.removeDoneTodos();
        expect(service.todos.length).toBe(2);
    });

});
