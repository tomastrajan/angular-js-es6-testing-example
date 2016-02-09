export function routing($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/feature-a');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })

}
