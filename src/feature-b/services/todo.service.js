import * as _ from 'lodash';

export default function TodoService(initialTodos) {

    const todos = initialTodos;

    return {
        todos,
        addTodo,
        toggleTodo,
        removeDoneTodos
    };

    function addTodo(label) {
        let todo = {
            label,
            done: false
        };
        todos.push(todo);
    }

    function toggleTodo(label) {
        let toggledTodo = _.find(todos, function(todo) {
            return todo.label === label;
        });
        toggledTodo.done = !toggledTodo.done;
    }

    function removeDoneTodos() {
        _.remove(todos, function(todo) {
            return todo.done;
        });
    }

}