import {CHANGE, ADD, DELETE, GET_LIST} from "./actionTypes";
import axios from 'axios'

export const CHANGE_ACTION = (value) => ({type: CHANGE, value});
export const ADD_ACTION = () => ({type: ADD});
export const DELETE_ACTION = (index) => ({type: DELETE, index});
export const GET_LIST_ACTION = (data) => ({type: GET_LIST, data});
export const AXIOS_GET_LIST_BY_THUNK = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/59083dd37a878d73716e6075/fetjq/getlist').then(({data}) => {
            let action = GET_LIST_ACTION(data.data.list);
            dispatch(action);
        })
    }
}
