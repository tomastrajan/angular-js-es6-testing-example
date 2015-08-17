export default class TodoComponent {

    constructor(TodoService) {
        this.TodoService = TodoService;
        this.todos = TodoService.todos;
        this.label = '';
    }

    addTodo() {
        this.TodoService.addTodo(this.label);
        this.label = '';
    }

    toggleTodo(todo) {
        this.TodoService.toggleTodo(todo.label);
    }

    removeDoneTodos() {
        this.TodoService.removeDoneTodos();
    }

}