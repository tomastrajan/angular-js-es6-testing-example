export function routing($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/feature-a');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<div app-component></div>'
        })

}
