import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './feature-a.config.js';

import someComponent from './some-component/some-component.directive';

export default angular
    .module('main.app.feature-a', [uirouter])
    .config(routing)
    .directive('someComponent', someComponent)
    .name;