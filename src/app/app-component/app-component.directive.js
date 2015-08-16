import template from './app-component.tpl.html';
import AppComponent from './app-component';

export default function() {

    return {
        scope: {},
        controller: AppComponent,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template
    };

}