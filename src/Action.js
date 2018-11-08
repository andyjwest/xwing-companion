import React, {Component} from 'react';
import Icon from "./Icon";
import actions from './data/actions/actions.json';

class ActionBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let icon = actions.find(lookup => this.props.type === lookup.name);

        if (icon) {
            let iconTag = <Icon icon={icon.xws} color={this.props.difficulty}/>;
            if (this.props.linked) {
                let linkedIcon = actions.find(lookup => this.props.linked.type === lookup.name);
                if(!linkedIcon){
                    console.error("This action is not mapped!");
                    console.error(linkedIcon);
                }
                return <div key={this.props.xws} style={{flexGrow:1}} >
                    {iconTag} <Icon icon="linked" color="white"/> <Icon icon={linkedIcon.xws} color={this.props.linked.difficulty}/>
                </div>
            }
            return <div key={this.props.xws} style={{flexGrow:1}} >{iconTag}</div>
        }
        console.error("This action is not mapped!");
        console.error(this.props);
        return <div key={this.props.xws}/>
    }
}

export default ActionBar;