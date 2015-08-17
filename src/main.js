// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

// 3rd party libraries
import bootstrap from 'bootstrap';
import angular from 'angular';

// Modules
import app from './app/app.module';
import common from './common/common.module';
import featureA from './feature-a/feature-a.module';
import featureB from './feature-b/feature-b.module';

angular.module('main', [app, common, featureA, featureB]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['main']);
});
