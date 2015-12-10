import * as types from '../constants/actionTypes';

export function increment(number) {
    return { type: types.INCREMENT_COUNTER, number };
}

export function decrement(number) {
    return { type: types.DECREMENT_COUNTER, number };
}