import React, {Component} from 'react';
import Action from "../Action";

class ActionBar extends Component {

    render() {
        return (
            <div className='bottom-right'>
                {this.props.actions.map(action => <Action {...action}/>)}
            </div>
        );
    }
}

export default ActionBar;