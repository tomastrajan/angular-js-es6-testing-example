import angular from 'angular';

import UserInfoComponent from './component/user-info-component';

export default angular
    .module('main.app.common', [])
    .component('userInfoComponent', UserInfoComponent)
    .name;