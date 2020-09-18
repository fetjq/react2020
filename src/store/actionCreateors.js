import {CHANGE,ADD,DELETE,GETLIST} from "./actionTypes";
export const CHANGE_ACTION=(value)=>({type:CHANGE,value});
export const ADD_ACTION=()=>({type:ADD});
export const DELETE_ACTION=(index)=>({type:DELETE,index});
export const GET_LIST=(data)=>({type:GETLIST,data});