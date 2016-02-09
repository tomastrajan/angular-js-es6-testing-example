import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './app.config.js';

import AppComponent from './app-component/app-component';
import template from './app-component/app-component.tpl.html';

export default angular
    .module('main.app', [uirouter])
    .config(routing)
    .component('appComponent', { controller: AppComponent, template })
    .name;