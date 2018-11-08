import React, {Component} from 'react';
import Action from "../Action";

class ActionBar extends Component {

    render() {
        return (
            <div style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}>
                {this.props.actions.map(action => <Action {...action}/>)}
            </div>
        );
    }
}

export default ActionBar;