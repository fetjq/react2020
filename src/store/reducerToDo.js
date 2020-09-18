import {CHANGE, ADD, DELETE, GET_LIST} from "./actionTypes";

const defaultState = {
    inputValue: '请输入',
    list: []
};
export default (state = defaultState, action) => {
    if (action.type === CHANGE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }


    return state;

}