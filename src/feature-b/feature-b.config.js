export function routing($stateProvider) {

    $stateProvider
        .state('app.feature-b', {
            url: '/feature-b',
            template: '<div todo-component></div>'
        });
}