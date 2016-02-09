import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './feature-a.config.js';

import SomeComponent from './some-component/some-component';
import template from './some-component/some-component.tpl.html';

export default angular
    .module('main.app.feature-a', [uirouter])
    .config(routing)
    .component('someComponent', { controller: SomeComponent, template })
    .name;