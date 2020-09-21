import React,{Component} from "react";
class DeleteItemTest extends Component{

    constructor(props) {
        super(props);

    }
    deleteItem1(index){
        this.props.deleteItemX(index);
    }
    render() {
        return(
            <ul>
                {
                    this.props.DeleteList.map((item,index)=>{
                        return (
                            <li key={index}>{item.name} <button onClick={this.deleteItem1.bind(this,index)}>删除</button> </li>
                        )
                    })
                }
            </ul>
        )
    }

}
export default DeleteItemTest;