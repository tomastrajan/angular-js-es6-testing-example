import template from './todo-component.tpl.html';
import TodoComponent from './todo-component';

export default function() {

    return {
        scope: {},
        controller: TodoComponent,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template
    };

}