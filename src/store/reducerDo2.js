import {CHANGE2, DO2} from "./actionTypes";
const defaultState = {
    inputValue: '请输入do2',
    list:[]
};
export default (state = defaultState, action) => {
    if (action.type === CHANGE2) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === DO2) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}