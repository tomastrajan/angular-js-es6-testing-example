export function routing($stateProvider) {

    $stateProvider
        .state('app.feature-a', {
            url: '/feature-a',
            template: '<some-component></some-component>'
        });
}