import * as types from '../constants/actionTypes';

const initialState = {
    counter: 0
};

export default function counter(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT_COUNTER:
            return {
                counter: state.counter + action.number
            };
        case types.DECREMENT_COUNTER:
            return {
                counter: state.counter - action.number
            };
        default:
            return state;
    }
};