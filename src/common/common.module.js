import angular from 'angular';

import userInfoComponent from './component/user-info-component';

export default angular
    .module('main.app.common', [])
    .directive('userInfoComponent', userInfoComponent)
    .name;