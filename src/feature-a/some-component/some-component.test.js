import { assert } from 'chai';

import SomeComponent from './some-component';

let component;

describe('SomeComponent', function() {

    beforeEach(function() {
        component = new SomeComponent();
    });

    it('should start with default counter value = 20', function () {
        assert.equal(component.counter, 20);
    });

    it('should accept initial counter value as dependency', function () {
        component = new SomeComponent(30);
        assert.equal(component.counter, 30);
    });

    it('should increment counter value after increment is called', function () {
        assert.equal(component.counter, 20);
        component.increment();
        assert.equal(component.counter, 21);
    });

});