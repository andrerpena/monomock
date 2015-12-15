export const ADD_COMPONENT = 'ADD_COMPONENT';
export const MOVE_COMPONENT = 'MOVE_COMPONENT';

export function addComponent(mockupId, componentId, position) {
    return {
        type: ADD_COMPONENT,
        mockupId: mockupId,
        componentId: componentId,
        position: position
    };
}

export function moveComponent(mockupId, componentId, position) {
    return {
        type: MOVE_COMPONENT,
        mockupId: mockupId,
        componentId: componentId,
        position: position
    };
}