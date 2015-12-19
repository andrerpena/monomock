import mockupsReducer from '../src/client/reducers/mockupsReducer';
import deepFreeze from 'deep-freeze';
import chai from 'chai';
import { ADD_COMPONENT, MOVE_COMPONENT } from '../src/client/actions/mockupActions';

var assert = chai.assert;

describe('mockupsReducer', function () {
    it('should return the default state', function () {
        let mockups = mockupsReducer(undefined, {});
        assert.strictEqual(mockups.length, 1);
        assert.strictEqual(mockups[0].name, 'default');
    });
    it('action: ADD_COMPONENT', function () {
        let state = [
            {
                name: 'default',
                components: [
                    {
                        id: 'textbox',
                        position: {x: 0, y: 0}
                    }
                ]
            }
        ];
        deepFreeze(state);
        let mockups = mockupsReducer(state, {
            type: ADD_COMPONENT,
            mockupName: 'default',
            componentType: 'textbox',
            componentPosition: {x: 10, y: 10}
        });
        mockups = mockupsReducer(mockups, {
            type: ADD_COMPONENT,
            mockupName: 'default',
            componentType: 'textbox',
            componentPosition: {x: 20, y: 20}
        });


        assert.strictEqual(mockups.length, 1);
        assert.strictEqual(mockups[0].name, 'default');
        assert.strictEqual(mockups[0].components.length, 3);
        assert.strictEqual(mockups[0].components[1].position.x, 10);
        assert.strictEqual(mockups[0].components[1].position.y, 10);
        assert.strictEqual(mockups[0].components[2].position.x, 20);
        assert.strictEqual(mockups[0].components[2].position.y, 20);
    });
});