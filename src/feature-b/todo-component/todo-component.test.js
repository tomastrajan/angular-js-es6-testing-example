import * as sinon from 'sinon';

import TodoComponent from './todo-component.js';
import TodoService from '../services/todo.service.js';

let component;
let mockTodoService;

describe('TodoComponent with mocked service (unit test)', function() {

    beforeEach(function() {
        let initialTodos = [];
        let TodoServiceInstance = new TodoService(initialTodos);
        mockTodoService = sinon.mock(TodoServiceInstance);
        component = new TodoComponent(TodoServiceInstance);
    });

    afterEach(function() {
       mockTodoService.restore();
    });

    it('should add todo', function () {
        mockTodoService
            .expects('addTodo')
            .once()
            .withArgs('Finish example project');

        component.label = 'Finish example project';
        component.addTodo();

        mockTodoService.verify();
    });

    it('should toggle todo', function () {
        let mockTodo = {label: 'Add unit tests', done: false};
        mockTodoService
            .expects('toggleTodo')
            .twice()
            .withArgs(mockTodo.label);

        component.toggleTodo(mockTodo);
        component.toggleTodo(mockTodo);

        mockTodoService.verify();
    });

    it('should remove done todos', function () {
        mockTodoService
            .expects('removeDoneTodos')
            .once();

        component.removeDoneTodos();

        mockTodoService.verify();
    });

});