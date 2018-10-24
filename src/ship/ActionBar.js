import React, {Component} from 'react';

class ActionBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        this.props.actions.map(action => <div style={{color: action.difficulty}}>{action.type}</div>);
        return (
            <div>
                {this.props.actions.map(action => <div style={{color: action.difficulty}}>{action.type}</div>)}
            </div>
        );
    }
}

export default ActionBar;