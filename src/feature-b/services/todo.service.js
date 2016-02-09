import * as _ from 'lodash';

export default class TodoService {

    constructor(initialTodos) {
        this.todos = initialTodos;
    }

    addTodo(label) {
        let todo = {
            label,
            done: false
        };
        this.todos.push(todo);
    }

    toggleTodo(label) {
        let toggledTodo = _.find(this.todos, function(todo) {
            return todo.label === label;
        });
        toggledTodo.done = !toggledTodo.done;
    }

    removeDoneTodos() {
        _.remove(this.todos, function(todo) {
            return todo.done;
        });
    }

}