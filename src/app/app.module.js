import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './app.config.js';
import appComponent from './app-component/app-component.directive';

export default angular
    .module('main.app', [uirouter])
    .config(routing)
    .directive('appComponent', appComponent)
    .name;