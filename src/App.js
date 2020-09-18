import React, {Component} from 'react';
import './App.css';
import store from "./store";
import {CHANGE_ACTION,ADD_ACTION,DELETE_ACTION,GET_LIST} from "./store/actionCreateors";
import ToDoListUi from "./todoListUi";
import axios from 'axios'
class App extends Component{
    constructor(props) {
        super(props);
        this.state=Object.assign({a:1},store.getState());
        this.addItem=this.addItem.bind(this);
        this.storeChange=this.storeChange.bind(this);
        this.changeInput=this.changeInput.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        store.subscribe(this.storeChange);
    }
    render(){
        return(
            <ToDoListUi
                inputValue={this.state.inputValue}
                changeInput={this.changeInput}
                addItem={this.addItem}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        )
    }
    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/59083dd37a878d73716e6075/fetjq/getlist').then(({data})=>{
            let action=GET_LIST(data.data.list);
            store.dispatch(action);
        })
    }

    storeChange(){
        this.setState(store.getState());
    }
    changeInput(e){
        const action=CHANGE_ACTION(e.target.value);
        store.dispatch(action);
    }
    addItem(){
        const action=ADD_ACTION();
        store.dispatch(action);
    }
    deleteItem(index){
        const action=DELETE_ACTION(index);
        store.dispatch(action);
    }
}
export default App;
