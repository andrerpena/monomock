export const ADD_COMPONENT = 'ADD_COMPONENT';
export const MOVE_COMPONENT = 'MOVE_COMPONENT';

export function addComponent(mockupName, componentType, position) {
    return {
        type: ADD_COMPONENT,
        mockupName: mockupName,
        componentType: componentType,
        componentPosition: position
    };
}

export function moveComponent(mockupName, componentType, position) {
    return {
        type: MOVE_COMPONENT,
        mockupName: mockupName,
        componentType: componentType,
        componentPosition: position
    };
}