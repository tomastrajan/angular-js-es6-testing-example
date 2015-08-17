import * as _ from 'lodash';

export default function TodoService(initialTodos) {

    const defaultTodos = [
        { label: 'Read blog post', done: true },
        { label: 'Checkout from github & run example', done: true },
        { label: 'Check github repository for implementation details', done: false },
        { label: 'Use in your own project!', done: false }
    ];

    const todos = initialTodos || defaultTodos;

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