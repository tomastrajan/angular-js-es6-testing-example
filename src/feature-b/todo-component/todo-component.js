export default class TodoComponent {

    constructor(TodoService) {
        this.TodoService = TodoService;
        this.todos = TodoService.todos;
        this.label = '';

        this.collapse = [true, true, true];
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

    toggleCollapse(index) {
        let originalValue = this.collapse[index];
        this.collapse.forEach((item, i) => {
            this.collapse[i] = true;
        });
        this.collapse[index] = !originalValue;
    }

}
