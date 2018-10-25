import React, {Component} from 'react';
import Icon from "../Icon";
import actions from '../data/actions/actions.json';

class ActionBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actions: actions
        }
    }

    buildActionIcon(action) {
        let icon = this.state.actions.find(lookup => action.type === lookup.name);

        if (icon) {
            let iconTag = <Icon icon={icon.xws} color={action.difficulty}/>;
            if (action.linked) {
                let linkedIcon = this.state.actions.find(lookup => action.linked.type === lookup.name);
                if(!linkedIcon){
                    console.error("This action is not mapped!");
                    console.error(linkedIcon);
                }
                return <div>
                    {iconTag} <Icon icon="linked" color="white"/> <Icon icon={linkedIcon.xws} color={action.linked.difficulty}/>
                </div>
            }
            return <div>{iconTag}</div>
        }
        console.error("This action is not mapped!");
        console.error(action);
        return <div/>
    }

    render() {

        let actionIcons = this.props.actions.map(action => this.buildActionIcon(action));

        return (
            <div>
                {actionIcons}
            </div>
        );
    }
}

export default ActionBar;