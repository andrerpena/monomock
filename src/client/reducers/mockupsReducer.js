import { ADD_COMPONENT, MOVE_COMPONENT } from '../actions/monomockActions';
import _ from 'underscore';

var defaultState = [
    {
        id: 'default',
        components: []
    }
];

export default function mockupsReducer(state = defaultState, action) {
    switch (state.type) {
        case ADD_COMPONENT:
            let mockups = state.slice(0);
            let mockup = _.find(mockups, (m) => m.id == action.mockupId);
            if(!mockup) {
                throw Error(`Could not find mockup. Mockup id: ${action.mockupId}`);
            }
            mockup = Object.assign({}, mockup); // clone the mockup
            mockup.components = mockup.components.concat([{
                id: action.componentId,
                position: { x: action.position.x, y: action.position.y }
            }]);
            return mockups;

        case MOVE_COMPONENT:

            let mockups = state.slice(0);
            let mockup = _.find(mockups, (m) => m.id == action.mockupId);
            if(!mockup) {
                throw Error(`Could not find mockup. Mockup id: ${action.mockupId}`);
            }
            mockup = Object.assign({}, mockup); // clone the mockup
            mockup.components = mockup.components.concat([{
                id: action.componentId,
                position: { x: action.position.x, y: action.position.y }
            }]);
            return mockups;
        default:
            return state;
    }
}