export function routing($stateProvider) {

    $stateProvider
        .state('app.feature-b', {
            url: '/feature-b',
            template: '<todo-component></todo-component>'
        });
}