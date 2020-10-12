import React, {Component} from "react";

class PureByUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {props, state} = this;

        function update(a, b) {
            return a === b || Object.keys(a).every((k) =>
                a[k] === b[k]
            )
        }

        return update(nextProps, props) && update(nextState, state)
    }

}

export default PureByUser;