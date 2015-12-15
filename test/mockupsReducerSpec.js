import mockupsReducer from '../src/client/reducers/mockupsReducer';
import deepFreeze from 'deep-freeze';
import chai from 'chai';

var assert = chai.assert;

describe('mockupsReducer', function() {
    it('should return the default state', function() {
        let state = mockupsReducer(undefined, {});
        assert.strictEqual(state.id, 'default');
        assert.isArray(state.components);
    });
});