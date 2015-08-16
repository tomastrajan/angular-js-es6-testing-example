import template from './some-component.tpl.html';
import SomeComponent from './some-component';

export default function() {

    return {
        scope: {},
        controller: SomeComponent,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template
    };

}