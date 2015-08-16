export default function() {

    return {
        scope: {},
        controller: UserInfoComponent,
        controllerAs: 'ctrl',
        bindToController: true,
        template: '<span style="color: #0088cc;">Hi {{ctrl.name}}!'
    };

}

class UserInfoComponent {

    constructor() {
        this.name = 'Tomas';
    }

}