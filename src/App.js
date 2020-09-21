import React, {Component} from 'react';
import './App.css';
import store from "./store";
import {CHANGE_ACTION, ADD_ACTION, DELETE_ACTION, AXIOS_GET_LIST_BY_THUNK} from "./store/actionCreateors";
import {ADD_ACTION2, CHANGE_ACTION2} from "./store/actionCreate1";
import {connect} from 'react-redux'
import {Button, Input, List} from "antd";
import DeleteItemTest from './delete-item-test'
import AppRouter from "./AppRouter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            DeleteList:[
                {name:1},
                {name:2},
                {name:3}
            ]
        }
        this.deleteItemX=this.deleteItemX.bind(this);
    }
    deleteItemX(index){
        let list = this.state.DeleteList
        list.splice(index,1)
        this.setState({
            DeleteList:list
        })
    }

    render() {
        let {inputValue, changeInput, addItem, dataList, deleteItem, changeInput2, addItem2, inputValue2, dataList2} = this.props;
        return (
            <div className="App" style={{paddingTop: '10px'}}>
                <Input placeholder={inputValue} value={inputValue} onChange={changeInput} style={{'width': '250px'}}/>
                <Button type='primary' onClick={addItem}>增加</Button>
                <div style={{marginTop: '10px'}}>
                    <List bordered dataSource={dataList} renderItem={(item, index) => (
                        <List.Item onClick={(item) => {
                            deleteItem(index)
                        }}>
                            {item}
                        </List.Item>
                    )}></List>
                </div>
                <div>
                    <input type="text" onChange={changeInput2} value={inputValue2}/>
                    <button onClick={addItem2}>增加</button>
                    <ul>
                        {
                            dataList2.map((item, index) => {
                                return (<li key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>


                <div>
                    <DeleteItemTest DeleteList={this.state.DeleteList} deleteItemX={this.deleteItemX}></DeleteItemTest>

                </div>
                <div style={{border:'1px solid red',marginTop:'100px'}}>
                    <AppRouter></AppRouter>
                </div>


            </div>
        )
    }

    componentDidMount() {
        let action = AXIOS_GET_LIST_BY_THUNK();
        store.dispatch(action);

    }
}


const stateProps = (state) => {
    return {
        inputValue: state.reducerToDo.inputValue,
        dataList: state.reducerToDo.list,
        inputValue2: state.reducerDo2.inputValue,
        dataList2: state.reducerDo2.list
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeInput(e) {
            const action = CHANGE_ACTION(e.target.value)
            dispatch(action)
        },
        addItem() {
            const action = ADD_ACTION()
            dispatch(action)
        },
        deleteItem(index) {
            const action = DELETE_ACTION(index)
            dispatch(action)
        },
        changeInput2(e) {
            console.log(e.target.value);
            const action = CHANGE_ACTION2(e.target.value)
            dispatch(action)
        },
        addItem2() {
            const action = ADD_ACTION2();
            dispatch(action)
        }
    }
}

export default connect(stateProps, mapDispatchToProps)(App);