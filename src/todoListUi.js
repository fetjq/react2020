import React from 'react';
import {Button, Input, List} from "antd";
// 无状态组件，它是一种函数式组件，没有state,只有一个render, 接收Props，渲染DOM，而不关注其他逻辑,性能较高
//https://www.easy-mock.com/mock/59083dd37a878d73716e6075/fetjq/getlist
export default function ToDoListUi(props) {
    return (
        <div className="App" style={{paddingTop: '10px'}}>
            <Input placeholder={props.inputValue} value={props.inputValue} onChange={props.changeInput}
                   style={{'width': '250px'}}/>
            <Button type='primary' onClick={props.addItem}>增加</Button>
            <div style={{marginTop: '10px'}}>
                <List bordered dataSource={props.list} renderItem={(item, index) => (
                    <List.Item onClick={props.deleteItem.bind(this, index)}>
                        {item}
                    </List.Item>
                )}></List>
            </div>
        </div>
    );
}

