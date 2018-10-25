import React, { PureComponent } from 'react';
import "../node_modules/xwing-miniatures-font/dist/xwing-miniatures.css";
import classNames from 'classnames';
import {colorMapping} from "./config";

class Icon extends PureComponent {

    render(){
        let iconClasses = classNames('xwing-miniatures-font', 'xwing-miniatures-font-' + this.props.icon);
        let color = colorMapping.get(this.props.color);
        if(!color){
            color = colorMapping.get('White');
        }
        return (
            <i className={iconClasses} style={{color: color}}/>
        )
    }
}

export default Icon;