import { ADD_COMPONENT, MOVE_COMPONENT } from '../actions/mockupActions';
import _ from 'underscore';

// default mockups
var defaultState = [
    {
        name: 'default',
        components: []
    }
];

export default function mockupsReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_COMPONENT:
        {
            let mockups = state.slice(0); // mockups is now a copy of the state

            let mockupIndex = _.findIndex(mockups, (m) => m.name == action.mockupName);
            if(mockupIndex == -1) {
                throw Error(`Could not find mockup. Mockup id: ${action.mockupName}`);
            }
            mockups[mockupIndex] = Object.assign({}, state[mockupIndex]);
            mockups[mockupIndex].components = state[mockupIndex].components.slice(0);
            mockups[mockupIndex].components.push({
                type: action.componentType,
                position: {x: action.componentPosition.x, y: action.componentPosition.y}
            });
            return mockups;
        }
        case MOVE_COMPONENT:
        {
            let mockups = state.slice(0);
            let mockup = _.find(mockups, (m) => m.name == action.mockupName);
            if (!mockup) {
                throw Error(`Could not find mockup. Mockup id: ${action.mockupName}`);
            }
            mockup = Object.assign({}, mockup); // clone the mockup
            mockup.components = mockup.components.concat([{
                type: action.componentType,
                position: {x: action.componentPosition.x, y: action.componentPosition.y}
            }]);
            return mockups;
        }
        default:
            return state;
    }
}